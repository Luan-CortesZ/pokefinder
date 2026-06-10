const CapturedPokemon = require('../models/capturedPokemon.model');

const LEVEL_MAX = 100;
const SHINY = 4096;

/**
 * Logique centrale de capture d'un Pokémon
 */
const capturePokemon = async (userId, pokemonId, pokemonName) => {
  if (!userId || !pokemonId) {
    throw new Error("userId et pokemonId sont obligatoires.");
  }

  const addedPokemon = await CapturedPokemon.findOneAndUpdate(
    { 
      userId: userId,
      pokemonId: parseInt(pokemonId)
    },
    { 
      $set: {
        capturedAt: new Date(),
        level: Math.floor(1 + (Math.random() * (LEVEL_MAX - 1))),
        isShiny: Math.floor(1 + (Math.random() * (SHINY - 1))) === SHINY,
        name: pokemonName
      }
    },
    { 
      upsert: true, 
      returnDocument: 'after',
      runValidators: true
    }
  );

  return addedPokemon;
};

/**
 * Logique centrale de récupération du Pokédex d'un utilisateur
 */
const getUsersPokemon = async (userId) => {
  if (!userId) {
    throw new Error("L'ID de l'utilisateur est obligatoire.");
  }
  return await CapturedPokemon.find({ userId: userId });
};

module.exports = {
  capturePokemon,
  getUsersPokemon
};