const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 86400 }); // Cache gardé 24h

const POKEAPI_GRAPHQL_URL = "https://graphql.pokeapi.co/v1beta2";

const resolvers = {
  Query: {
    getPokemonsByRegion: async (_, { generationId }) => {
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
            evolves_from_species_id
            names: pokemonspeciesnames(where: {language: {name: {_eq: "fr"}}}) {
              name
            }
            pokemonhabitat {
              pokemonhabitatnames(where: {language: {name: {_eq: "fr"}}}) {
                name
              }
            }
            pokemons(limit: 1) {
              id
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
                front_shiny: sprites(path: "front_shiny")
              }
            }
            pokemoncolor {
              pokemoncolornames(where: {language: {name: {_eq: "fr"}}}) {
                name
              }
            }
          }
          all_species: pokemonspecies {
            id
            evolves_from_species_id
          }
          encounters: encounter(
            where: {
              pokemon: {pokemonspecy: {generation: {region: {id: {_eq: $gen}}}}}
              locationarea: {location: {region: {id: {_eq: $gen}}}}
            }
            distinct_on: pokemon_id
            order_by: {pokemon_id: asc}
          ) {
            pokemon_id
            locationarea {
              locationareanames(where: {language: {name: {_eq: "fr"}}}) {
                name
              }
              location {
                locationnames(where: {language: {name: {_eq: "fr"}}}) {
                  name
                }
              }
            }
          }
        }
      `;
      try {
        const response = await fetch(POKEAPI_GRAPHQL_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query,
            variables: { gen: generationId },
          }),
        });

        const json = await response.json();
        const species = json.data.gen_species;
        const speciesById = new Map(
          json.data.all_species.map((s) => [s.id, s.evolves_from_species_id]),
        );
        const encounterByPokemonId = new Map(
          json.data.encounters.map((encounter) => [
            encounter.pokemon_id,
            encounter.locationarea?.locationareanames[0]?.name ||
              encounter.locationarea?.location?.locationnames[0]?.name,
          ]),
        );
        const rawHabitatBySpeciesId = new Map();
        const stageById = new Map();
        const habitatBySpeciesId = new Map();

        species.forEach((s) => {
          const details = s.pokemons[0];
          rawHabitatBySpeciesId.set(
            s.id,
            s.pokemonhabitat?.pokemonhabitatnames[0]?.name ||
              encounterByPokemonId.get(details?.id),
          );
        });

        const getEvolutionStage = (speciesId) => {
          if (stageById.has(speciesId)) {
            return stageById.get(speciesId);
          }

          const parentId = speciesById.get(speciesId);
          const stage = parentId ? getEvolutionStage(parentId) + 1 : 1;
          stageById.set(speciesId, stage);

          return stage;
        };

        const getHabitat = (speciesId) => {
          if (habitatBySpeciesId.has(speciesId)) {
            return habitatBySpeciesId.get(speciesId);
          }

          const directHabitat = rawHabitatBySpeciesId.get(speciesId);
          if (directHabitat) {
            habitatBySpeciesId.set(speciesId, directHabitat);
            return directHabitat;
          }

          const parentId = speciesById.get(speciesId);
          const inheritedHabitat = parentId ? getHabitat(parentId) : undefined;
          habitatBySpeciesId.set(speciesId, inheritedHabitat);

          return inheritedHabitat;
        };

        const mappedData = species.map((s) => {
          const details = s.pokemons[0];
          return {
            id: s.id,
            name: s.names[0]?.name || "Inconnu",
            height: details?.height,
            weight: details?.weight,
            sprites: {
              front_default: details?.pokemonsprites[0]?.front_default,
              front_shiny: details?.pokemonsprites[0]?.front_shiny,
            },
            types: details?.pokemontypes.map((t) => ({
              name: t.type?.translated_name[0]?.name,
              url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${t.type?.translated_name[0]?.type_id}.png`,
            })),
            habitat: getHabitat(s.id),
            color: s.pokemoncolor?.pokemoncolornames[0]?.name,
            evolutionStage: getEvolutionStage(s.id),
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
  },
};

module.exports = resolvers;
