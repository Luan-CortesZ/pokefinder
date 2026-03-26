const express = require('express')
const app = express()
app.use(express.json());

const pokemonRoutes = require('./routes/pokemon.routes')
app.use('/api/pokemon', pokemonRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})  