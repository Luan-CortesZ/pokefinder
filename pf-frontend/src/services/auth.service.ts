import type { LoginFormInputs } from "../models/login.model";
import type { User } from "../models/user.model";
const API_URL = 'http://localhost:3000/api/auth'; 

export const AuthService = {
    login: async (credentials: LoginFormInputs): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(credentials),
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
    register: async (userData: User): Promise<any> => {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userData),
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