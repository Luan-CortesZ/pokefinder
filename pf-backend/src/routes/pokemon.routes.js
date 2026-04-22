const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon.controller"); // Chemin vers ton contrôleur

router.get("/region/:region", pokemonController.getPokemonsByRegion);
// :region => param
router.get("/random/:region", pokemonController.getRandomPokemon);

module.exports = router;
