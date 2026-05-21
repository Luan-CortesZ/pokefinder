const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { 
      return res.status(500).json({ message: "Erreur serveur" }); 
    }
    
    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides"  });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.SESSION_SECRET,
      { expiresIn: '1d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, //only in prod with HTTPS
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000 
    });

    console.log("Utilisateur connecté avec JWT:", user.email);
    
    return res.status(200).json({ 
      message: "Connexion réussie", 
      user: { id: user._id, name: user.name, email: user.email },
    });
  })(req, res, next);
};

exports.register = async (req, res) => {
  try {
    const db = client.db("pokefinder");
    const users = db.collection("users");
    const existingUser = await users.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }
    const user = await users.insertOne({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10)
    });
    console.log("Utilisateur créé:", user);
    res.status(201).json({ message: "Utilisateur créé", user: { id: user.insertedId, name: req.body.name, email: req.body.email } });
  }catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};