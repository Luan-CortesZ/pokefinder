const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

exports.capturePokemon = async (req, res, next) => {
  try {
    const db = client.db("pokefinder");
    const users = db.collection("captured_pokemons");
    const addedPokemon = await users.updateOne(
      { 
        userId: new ObjectId(req.body.userId),
        pokemonId: parseInt(req.body.pokemonId)
      },
      { 
        $set: {
          level: Math.floor(1 + (Math.random() * 99)),
          isShiny: req.body.isShiny,
          capturedAt: new Date()
        }
      },
      { 
        upsert: true 
      }
    );
    console.log("Pokémon ajouté:", addedPokemon);
    res.status(201).json({ message: "Pokémon ajouté" });
  }catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};