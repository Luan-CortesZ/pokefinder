const pokemonService = require("../services/pokemon.service");

exports.getPokemonsByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    const pokemons = await pokemonService.getPokemonsByRegion(region);
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pokemons", error });
  }
};

exports.getRandomPokemon = async (req, res) => {
  try {
    const { region } = req.params;
    console.log(region);
    const randomPokemon = await pokemonService.getRandomPokemon(region);
    res.status(200).json(randomPokemon);
  } catch (error) {
    res.status(500).json({ message: "Error fetching random pokemon", error });
  }
};
