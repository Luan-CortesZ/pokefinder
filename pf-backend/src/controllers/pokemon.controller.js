const pokemonService = require('../services/pokemon.service');


exports.getPokemonsByRegion = async (req, res) => {
    try {
        const { region } = req.params;
        const pokemons = await pokemonService.getPokemonsByRegion(region);
        res.status(200).json(pokemons);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching pokemons', error });
    }
};