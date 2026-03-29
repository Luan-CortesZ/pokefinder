require('dotenv').config();
const express = require('express')
const session = require('express-session');
const cors = require('cors');
const { connectDB } = require('./config/database')
const passport = require('passport');
require('./config/passport')(passport);

const pokemonRoutes = require('./routes/pokemon.routes')
const authRoutes = require('./routes/auth.routes')
const app = express()

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // True si prod
    maxAge: 1000 * 60 * 60 * 24 // 24h
  }
}));

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true 
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/pokemon', pokemonRoutes)
app.use('/api/auth', authRoutes)

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(3000, () => {
      console.log("Database connected & Server running on http://localhost:3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();