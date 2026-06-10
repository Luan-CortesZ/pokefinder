const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    
    console.log("Connecté à MongoDB via Mongoose !");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB :", error);
    process.exit(1);
  }
};

module.exports = connectDB;