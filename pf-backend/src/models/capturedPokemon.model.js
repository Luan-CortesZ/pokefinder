const mongoose = require('mongoose');

const capturedPokemonSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, "L'ID de l'utilisateur est obligatoire"]
  },
  pokemonId: {
    type: Number,
    required: [true, "L'ID du Pokémon est obligatoire"],
    min: [1, "L'ID du Pokémon doit être supérieur à 0"]
  },
  name: {
    type: String,
    required: [true, "Le nom du Pokémon est obligatoire"],
    trim: true
  },
  level: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  },
  isShiny: {
    type: Boolean,
    default: false
  },
  capturedAt: {
    type: Date,
    default: Date.now
  }
}, { versionKey: false });

capturedPokemonSchema.index({ userId: 1, pokemonId: 1 }, { unique: true });

module.exports = mongoose.model('CapturedPokemon', capturedPokemonSchema);