const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const userController = require('../controllers/user.controller');

router.post('/capture-pokemon', userController.capturePokemon);
router.get('/pokemons/:userId', userController.getUsersPokemon);

module.exports = router;