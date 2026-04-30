const POKEAPI_GRAPHQL_URL = "https://graphql.pokeapi.co/v1beta2";

const resolvers = {
  Query: {
    getPokemonsByRegion: async (_, {generationId}) => {
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
      
      const response = await fetch(POKEAPI_GRAPHQL_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          query,
          variables: {gen: generationId}
        })
      });

      const json = await response.json();
      if (json.errors) {
        throw new Error(`PokeAPI GraphQL Error: ${json.errors[0].message}`);
      }

      if (!json.data || !json.data.gen_species) {
        console.error("Structure 'gen_species' manquante dans la réponse");
        return [];
      }
      const species = json.data.gen_species;
      return species.map(s => {
        const details = s.pokemons[0];
        console.log(details.pokemontypes)
        return {
          id: s.id,
          name: s.names[0]?.name || "Inconnu",
          height: details?.height,
          weight: details?.weight,
          sprites: {
            front_default: details?.pokemonsprites[0]?.front_default
          },
          types: details?.pokemontypes.map(t => ({
            type: { name: t.type?.translated_name[0]?.name }
          })),
          habitat: s.pokemonhabitat?.pokemonhabitatnames[0]?.name,
          color: s.pokemoncolor?.pokemoncolornames[0]?.name
        };
      });
    }
  }
}

module.exports = resolvers