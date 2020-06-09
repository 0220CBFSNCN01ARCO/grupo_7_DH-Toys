const { check, valiationResult, body } = require('express-validator');
const usersController = require('../controllers/usersController')

const reglasDeValidacionDeUsuarios = () => {
    return [body('email').custom(function (value) {
        const users = usersController.users();
        const userFound = users.find(user => {
            return user.email == value;
        })
        if (userFound) {
            return false;
        } return true;
    }).withMessage('El e-mail ya está registrado.'), check("password", "Password Invalido, mínimo 4 caracteres.")
        .isLength({ min: 4 })
        .custom((value, { req}) => {
            if (value !== req.body.repeatPassword) {
                throw new Error("Los passwords no coinciden.");
            } else {
                return value;
            }
        })
    ]
}

const validar = (req, res, next) => {
    next();
};

module.exports = {reglasDeValidacionDeUsuarios, validar}



