const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 

exports.login = async (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { 
      return res.status(500).json({ message: "Erreur serveur" }); 
    }
    
    if (!user) {
      return res.status(401).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name },
      process.env.SESSION_SECRET,
      { expiresIn: '1d' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: false, //only in prod with HTTPS
      sameSite: 'lax',
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
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword
    });

    await newUser.save();
    
    console.log("Utilisateur créé avec Mongoose:", newUser.email);
    
    res.status(201).json({ 
      message: "Utilisateur créé", 
      user: { id: newUser._id, name: newUser.name, email: newUser.email } 
    });

  } catch (err) {
    console.error("Erreur register:", err);
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: "Erreur serveur" });
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: false, //only in prod with HTTPS
      sameSite: 'lax'
    });
    
    return res.status(200).json({ message: "Déconnexion réussie" });
  } catch (err) {
    console.error("Erreur lors du logout:", err);
    return res.status(500).json({ message: "Erreur serveur lors de la déconnexion" });
  }
};