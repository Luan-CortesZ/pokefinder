const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 86400 }); // Cache gardé 24h

const POKEAPI_GRAPHQL_URL = "https://graphql.pokeapi.co/v1beta2";

const resolvers = {
  Query: {
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
            where: {generation: { region: {id: {_eq: $gen}}}}
            order_by: {id: asc}
          ) {
            id
            names: pokemonspeciesnames(where: {language: {name: {_eq: "fr"}}}) {
              name
            }
            pokemonhabitat {
              pokemonhabitatnames(where: {language: {name: {_eq: "fr"}}}) {
                name
              }
            }
            pokemons(limit: 1) {
              weight
              height
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
            name: s.names[0]?.name || "Inconnu",
            height: details?.height,
            weight: details?.weight,
            sprites: {
              front_default: details?.pokemonsprites[0]?.front_default
            },
            types: details?.pokemontypes.map(t => ({
              name: t.type?.translated_name[0]?.name,
              url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${t.type?.translated_name[0]?.type_id}.png`
            })),
            habitat: s.pokemonhabitat?.pokemonhabitatnames[0]?.name,
            color: s.pokemoncolor?.pokemoncolornames[0]?.name
          };
        });

        myCache.set(cacheKey, mappedData);
        console.log("Nouvelles données mises en cache");
        
        return mappedData;
      }catch{
        console.error("Erreur GraphQL/PokeAPI:", error);
        throw new Error("Erreur lors de la récupération des Pokémons");
      }
    }
  }
}

module.exports = resolvers