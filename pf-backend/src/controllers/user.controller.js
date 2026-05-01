const authService = require('../services/user.service');

exports.capturePokemon = async (req, res, next) => {
    try {
        await authService.capturePokemon(req, res);
    } catch (error) {
        next(error);
    }
};