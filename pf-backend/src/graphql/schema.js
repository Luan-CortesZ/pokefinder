const typeDefs = `#graphql
  type Sprite { front_default: String }
  type TypeDetails { name: String }
  type PokemonType { type: TypeDetails }

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