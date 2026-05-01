const userService = require('../services/user.service');

exports.capturePokemon = async (req, res, next) => {
    try {
        await userService.capturePokemon(req, res);
    } catch (error) {
        next(error);
    }
};

exports.getUsersPokemon = async (req, res, next) => {
    try {
        await userService.getUsersPokemon(req, res);
    } catch (error) {
        next(error);
    }
};