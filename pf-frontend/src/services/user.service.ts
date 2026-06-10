import { gql, type TypedDocumentNode } from "@apollo/client";
import { client } from "../app/main";
import type { CapturedPokemon } from "../models/pokemon.model";



interface GetMyPokedexResponse {
  getMyPokedex: CapturedPokemon[];
}

export const GET_MY_POKEDEX: TypedDocumentNode<GetMyPokedexResponse, Record<string, never>> = gql`
  query GetMyPokedex {
    getMyPokedex {
      id
      pokemonId
      name
      level
      isShiny
      capturedAt
    }
  }
`;

const CAPTURE_POKEMON = gql`
  mutation CapturePokemon($pokemonId: Int!, $pokemonName: String!) {
    capturePokemon(pokemonId: $pokemonId, pokemonName: $pokemonName) {
      pokemonId
      name
    }
  }
`;

export const UserService = {
  getUsersPokemon: async (): Promise<CapturedPokemon[]> => {
    try {
      const { data } = await client.query({
        query: GET_MY_POKEDEX,
        fetchPolicy: "network-only",
      });
      
      return data?.getMyPokedex || [];
    } catch (error) {
      console.error("Erreur GraphQL getUsersPokemon:", error);
      throw error;
    }
  },

  capturePokemon: async (pokemonId: number, pokemonName: string): Promise<any> => {
    try {
      const { data } = await client.mutate({
        mutation: CAPTURE_POKEMON,
        variables: { pokemonId, pokemonName },
        refetchQueries: [{ query: GET_MY_POKEDEX }],
      });
      return data;
    } catch (error) {
      console.error("Erreur GraphQL capturePokemon:", error);
      throw error;
    }
  },
};