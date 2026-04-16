const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const { client } = require('./database');

module.exports = function(passport) {
  passport.use( new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const db = client.db("pokefinder");
        const collection = db.collection("users");

        const user = await collection.findOne({ email: email });

        if (!user) {
          return done(null, false, { message: 'Cet email n\'est pas enregistré.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Mot de passe incorrect.' });
        }
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const db = client.db("pokefinder");
      const user = await db.collection("users").findOne({ _id: new ObjectId(id) });
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};