import type { Pokemon } from "../models/pokemon";

const API_URL = 'http://localhost:3000/api/pokemon'; 

export const PokemonService = {
    getPokemonsByRegion: async (regionId: string): Promise<Pokemon[]> => {
        try {
            const response = await fetch(`${API_URL}/region/${regionId}`);
            if (!response.ok) throw new Error('Erreur réseau');
            return await response.json();
        } catch (error) {
            console.error("Erreur service:", error);
            throw error;
        }
    },
};