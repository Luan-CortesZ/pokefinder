const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { 
      return res.status(500).json({ message: "Erreur serveur" }); 
    }
    
    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides"  });
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Connexion réussie", user: user.username });
    });
  })(req, res, next);
};

exports.register = async (req, res) => {
  try {
    const db = client.db("pokefinder");
    const users = db.collection("users");
    const user = await users.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10)
    });
    res.status(201).json({ message: "Utilisateur créé", user: user.name });
  }catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};