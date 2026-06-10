const typeDefs = `#graphql
  type Sprite { front_default: String, front_shiny: String }
  type PokemonType { name: String, url: String }

  type Pokemon {
    id: Int
    evolutionStage: Int
    name: String
    height: Int
    weight: Int
    sprites: Sprite
    types: [PokemonType]
    habitat: String
    color: String
  }

  type CapturedPokemon {
    id: ID
    userId: String
    pokemonId: Int
    name: String
    level: Int
    isShiny: Boolean
    capturedAt: String
  }

  type Query {
    getPokemonsByRegion(generationId: Int!): [Pokemon]
    getPokemonCount: Int
    getMyPokedex: [CapturedPokemon]
  }

  type Mutation {
    capturePokemon(pokemonId: Int!, pokemonName: String!): CapturedPokemon
  }
`;

module.exports = typeDefs;