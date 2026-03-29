const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', (req, res, next) => {
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
});

module.exports = router;