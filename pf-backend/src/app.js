const express = require('express')
const cors = require('cors');
const { connectDB } = require('./config/database')
const pokemonRoutes = require('./routes/pokemon.routes')
const app = express()
const passport = require('passport');
require('./config/passport')(passport);

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/pokemon', pokemonRoutes)

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