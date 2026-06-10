const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Le nom d'utilisateur est obligatoire"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "L'adresse email est obligatoire"],
    unique: true,
    lowercase: true,
    match: [/^\s*[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}\s*$/, "Veuillez fournir un email valide"]
  },
  password: {
    type: String,
    required: [true, "Le mot de passe est obligatoire"],
    minlength: [6, "Le mot de passe doit contenir au moins 6 caractères"]
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);