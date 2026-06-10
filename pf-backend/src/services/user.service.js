const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const CapturedPokemon = require('../models/capturedPokemon.model');

const LEVEL_MAX = 100;
const SHINY = 4096;

exports.capturePokemon = async (req, res, next) => {
  try {
    const { userId, pokemonId, pokemonName } = req.body;

    if (!userId || !pokemonId) {
      return res.status(400).json({ message: "userId et pokemonId sont obligatoires." });
    }

    const addedPokemon = await CapturedPokemon.findOneAndUpdate(
      { 
        userId: userId,
        pokemonId: parseInt(pokemonId)
      },
      { 
        $setOnInsert: { capturedAt: new Date() },
        $set: {
          level: Math.floor(1 + (Math.random() * (LEVEL_MAX - 1))),
          isShiny: Math.floor(1 + (Math.random() * (SHINY - 1))) === SHINY,
          name: pokemonName
        }
      },
      { 
        upsert: true, 
        new: true, 
        runValidators: true
      }
    );

    console.log("Pokémon ajouté ou mis à jour avec succès :", addedPokemon);
    
    return res.status(201).json({ 
      message: "Pokémon ajouté", 
      pokemon: addedPokemon 
    });

  } catch (err) {
    console.error("Erreur complète dans capturePokemon :", err);

    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.getUsersPokemon = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const pokemons = await CapturedPokemon.find({ userId: userId });

    return res.status(200).json({ pokemons: pokemons });

  } catch (err) {
    console.error("Erreur getUsersPokemon :", err);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};