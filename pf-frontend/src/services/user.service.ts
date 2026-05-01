const API_URL = 'http://localhost:3000/api/user'; 

export const UserService = {
    capturePokemon: async (userId: string, pokemonId: number): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}/capture-pokemon`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userId, pokemonId}),
                credentials: 'include'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur de connexion');
            }

            return await response.json();
        } catch (error) {
            console.error("Erreur service auth:", error);
            throw error;
        }
    },
};