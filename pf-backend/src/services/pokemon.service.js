const Pokemon = require("../models/pokemon.model");
const Region = require("../models/region.model");
const NodeCache = require("node-cache");

const myCache = new NodeCache({ stdTTL: 86400 }); // Cache garde 24h (en secondes)
const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";
const FETCH_TIMEOUT_MS = 10000;
const FETCH_RETRIES = 2;
const MAX_CONCURRENT_REQUESTS = 10;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchJsonWithRetry = async (url, options = {}) => {
  for (let attempt = 0; attempt <= FETCH_RETRIES; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`PokeAPI returned ${response.status} for ${url}`);
      }

      return await response.json();
    } catch (error) {
      const isLastAttempt = attempt === FETCH_RETRIES;

      if (isLastAttempt) {
        throw error;
      }

      await delay(500 * (attempt + 1));
    } finally {
      clearTimeout(timeoutId);
    }
  }
};

const chunkArray = (items, chunkSize) => {
  const chunks = [];

  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }

  return chunks;
};

exports.getPokemonsByRegion = async (region) => {
  const cacheKey = `region-${region}`;
  const cachedData = myCache.get(cacheKey);

  if (cachedData) {
    console.log("Data from cache");
    return cachedData;
  }

  const data = await fetchJsonWithRetry(
    `${POKEAPI_BASE_URL}/generation/${region}`,
  );
  const pokemonsId = new Region(data).pokemon_species
    .map((pokemon) => +pokemon.url.split("/")[6])
    .sort((a, b) => a - b);

  try {
    const details = [];
    const pokemonIdChunks = chunkArray(pokemonsId, MAX_CONCURRENT_REQUESTS);

    for (const pokemonIds of pokemonIdChunks) {
      const chunkDetails = await Promise.all(
        pokemonIds.map(async (pokemonId) => {
          const pokemonData = await fetchJsonWithRetry(
            `${POKEAPI_BASE_URL}/pokemon/${pokemonId}`,
          );

          return new Pokemon(pokemonData);
        }),
      );

      details.push(...chunkDetails);
    }

    myCache.set(cacheKey, details);
    return details;
  } catch (error) {
    console.error("Error fetching pokemons:", error);
    throw error;
  }
};

exports.getRandomPokemon = async (region) => {
  const pokemons = await this.getPokemonsByRegion(region);
  const randomIndex = Math.floor(Math.random() * pokemons.length);
  console.log(pokemons[randomIndex]);
  return pokemons[randomIndex];
};
