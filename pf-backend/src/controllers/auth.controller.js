const authService = require('../services/auth.service');

exports.register = async (req, res, next) => {
    try {
        await authService.register(req, res);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        await authService.login(req, res);
    } catch (error) {
        next(error);
    }
};