const Pokemon = require('../models/pokemon.model');
const Region = require('../models/region.model');
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 86400 }); // Cache gardé 24h (en secondes)

exports.getPokemonsByRegion = async (region) => {
  const cacheKey = `region-${region}`;
  const cachedData = myCache.get(cacheKey);
  if(cachedData) {
    console.log('Data from cache');
    return cachedData;
  }
  const response = await fetch(`https://pokeapi.co/api/v2/generation/${region}`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  const pokemonsId = new Region(data).pokemon_species.map(p => +p.url.split('/')[6]).sort((a, b) => a - b);
  
  try{
    const details = await Promise.all(
      pokemonsId.map(p => {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${p}`)
        .then(res => res.json())
        .then(data => new Pokemon(data))
      })
    );
    myCache.set(cacheKey, details);
    return details;
  }catch(error){
    console.error('Error fetching pokemons:', error);
    throw error;
  }
};