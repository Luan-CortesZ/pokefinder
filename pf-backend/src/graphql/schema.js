const typeDefs = `#graphql
  type Sprite { front_default: String, front_shiny: String }
  type PokemonType { name: String, url: String }

  type Pokemon {
    id: Int
    name: String
    height: Int
    weight: Int
    sprites: Sprite
    types: [PokemonType]
    habitat: String
    color: String
  }

  type Query {
    getPokemonsByRegion(generationId: Int!): [Pokemon]
  }
`;
module.exports = typeDefs;