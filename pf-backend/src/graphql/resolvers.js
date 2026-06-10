const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 86400 }); // Cache gardé 24h
const { capturePokemon, getUsersPokemon } = require('../services/user.service');
const POKEAPI_GRAPHQL_URL = "https://graphql.pokeapi.co/v1beta2";

const resolvers = {
  Mutation: {
    capturePokemon: async (_, { pokemonId, pokemonName }, context) => {
      if (!context.user) {
        throw new Error("Non autorisé ! Vous devez être connecté pour capturer un Pokémon.");
      }

      try {
        const newCapture = await capturePokemon(context.user._id, pokemonId, pokemonName);
        return newCapture;
      } catch (error) {
        throw new Error(error.message);
      }
    }
  },
  Query: {
    getMyPokedex: async (_, __, context) => {
      if (!context.user) {
        throw new Error("Non autorisé ! Vous devez être connecté pour voir votre Pokédex.");
      }

      try {
        return await getUsersPokemon(context.user._id);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    getPokemonsByRegion: async (_, {generationId}) => {
      const cacheKey = `region-${generationId}`;
      const cachedData = myCache.get(cacheKey);
      if (cachedData) {
        console.log("Données servies depuis le cache");
        return cachedData;
      }

      const query = `
        query samplePokeAPIquery($gen: Int!) {
          gen_species: pokemonspecies(
            where: {generation: { id: {_eq: $gen}}}
            order_by: {id: asc}
          ) {
            id              
            evolutionchain {
              id
            }
            names: pokemonspeciesnames(where: {language: {name: {_eq: "fr"}}}) {
              name
            }
            pokemons(limit: 1) {
              weight
              height
              encounters{
                locationarea{
                  name
                }
              }
              pokemontypes: pokemontypes {
                type: type {
                  translated_name: typenames(where: {language: {name: {_eq: "fr"}}}) {
                    name
                    type_id
                  }
                }
              }
              pokemonsprites: pokemonsprites {
                front_default: sprites(path: "front_default")
                front_shiny: sprites(path: "front_shiny")
              }
            }
            pokemoncolor {
              pokemoncolornames(where: {language: {name: {_eq: "fr"}}}) {
                name
              }
            }
          }
        }
      `;
      try{
        const response = await fetch(POKEAPI_GRAPHQL_URL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            query,
            variables: {gen: generationId}
          })
        });

        const json = await response.json();
        const species = json.data.gen_species;
        const mappedData = species.map(s => {
          const details = s.pokemons[0];
          return {
            id: s.id,
            evolutionStage: getEvolutionStage(s, species),
            name: s.names[0]?.name || "Inconnu",
            height: details?.height,
            weight: details?.weight,
            sprites: {
              front_default: details?.pokemonsprites[0]?.front_default,
              front_shiny: details?.pokemonsprites[0]?.front_shiny
            },
            types: details?.pokemontypes.map(t => ({
              name: t.type?.translated_name[0]?.name || "Introuvable dans la nature",
              url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${t.type?.translated_name[0]?.type_id}.png`
            })),
            habitat: details?.encounters[0]?.locationarea?.name.toString(),
            color: s.pokemoncolor?.pokemoncolornames[0]?.name
          };
        });

        myCache.set(cacheKey, mappedData);
        console.log("Nouvelles données mises en cache");
        
        return mappedData;
      } catch (error) {
        console.error("Erreur GraphQL/PokeAPI:", error);
        throw new Error("Erreur lors de la récupération des Pokémons");
      }
    },
    getPokemonCount: async () => {
      const cacheKey = `pokemonCount`;
      const cachedData = myCache.get(cacheKey);
      if (cachedData) {
        console.log("Données de comptage servies depuis le cache");
        return cachedData;
      }
      const query = `
        query getPokemonCount {
          pokemon_aggregate {
            aggregate{
              count
            }
          }
        }
      `;
      try{
        const response = await fetch(POKEAPI_GRAPHQL_URL, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            query
          })
        });

        const json = await response.json();
        myCache.set(cacheKey, json.data.pokemon_aggregate.aggregate.count);
        console.log("Nouvelles données mises en cache");
        
        return json.data.pokemon_aggregate.aggregate.count;
      } catch (error) {
        console.error("Erreur GraphQL/PokeAPI:", error);
        throw new Error("Erreur lors de la récupération des Pokémons");
      }
    }
  }
}

function getEvolutionStage(currentPokemon, pokemons) {
  const same_species = pokemons.filter(p => p.evolutionchain.id === currentPokemon.evolutionchain.id)
  return same_species.findIndex(p => p.id === currentPokemon.id) + 1;
}

module.exports = resolvers