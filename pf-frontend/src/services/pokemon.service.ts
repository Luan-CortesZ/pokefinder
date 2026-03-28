import type { Pokemon } from "../models/pokemon";

const API_URL = 'http://localhost:3000/api/pokemon'; 

export const PokemonService = {
    getPokemonsByRegion: async (regionId: string): Promise<Pokemon[]> => {
        try {
            const cachedData = localStorage.getItem(`pokemons-${regionId}`);
            if (cachedData) {
                return JSON.parse(cachedData);
            }
            const response = await fetch(`${API_URL}/region/${regionId}`);
            if (!response.ok) throw new Error('Erreur réseau');
            const pokemons = await response.json();
            localStorage.setItem(`pokemons-${regionId}`, JSON.stringify(pokemons));
            return pokemons;
        } catch (error) {
            console.error("Erreur service:", error);
            throw error;
        }
    },
};