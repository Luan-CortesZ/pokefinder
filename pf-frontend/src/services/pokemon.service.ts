import { gql } from '@apollo/client';
import type { Pokemon } from "../models/pokemon.model";
import { client } from '../app/main';

interface GetPokemonsResponse {
  getPokemonsByRegion: Pokemon[];
}

const GET_POKEMONS_BY_REGION = gql`
  query GetPokemons($gen: Int!) {
    getPokemonsByRegion(generationId: $gen) {
      id
      name
      height
      weight
      habitat
      color
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export const PokemonService = {
  getPokemonsByRegion: async (generationId: number): Promise<Pokemon[]> => {
    try {
      const { data } = await client.query<GetPokemonsResponse>({
        query: GET_POKEMONS_BY_REGION,
        variables: { gen: generationId },
      });
      if (!data) return [];
      return data.getPokemonsByRegion;
    } catch (error) {
      console.error("Erreur service GraphQL:", error);
      throw error;
    }
  },

  getRandomPokemon: async (generationId: number): Promise<Pokemon> => {
    const pokemons = await PokemonService.getPokemonsByRegion(generationId);
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
  },
};