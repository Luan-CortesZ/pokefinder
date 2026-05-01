const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');

const LEVEL_MAX = 100
const SHINY = 4096
exports.capturePokemon = async (req, res, next) => {
  try {
    const db = client.db("pokefinder");
    const captured_pokemons = db.collection("captured_pokemons");
    const addedPokemon = await captured_pokemons.updateOne(
      { 
        userId: new ObjectId(req.body.userId),
        pokemonId: parseInt(req.body.pokemonId)
      },
      { 
        $set: {
          level: Math.floor(1 + (Math.random() * (LEVEL_MAX-1))),
          isShiny: Math.floor(1 + (Math.random() * (SHINY-1))) == SHINY,
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

exports.getUsersPokemon = async (req, res, next) => {
  try {
    const {userId} = req.params
    const db = client.db("pokefinder");
    const captured_pokemons = db.collection("captured_pokemons");
    const pokemons = await captured_pokemons.find({userId: new ObjectId(userId)}).toArray();
    res.status(201).json({ pokemons: pokemons });
  }catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};