const { check, valiationResult, body } = require('express-validator');
const usersController = require('../controllers/usersController');
const bcrypt = require('bcrypt');

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

const ValidacionDelogin = () => {
    return [body('email').custom(function (value) {
        const users = usersController.users();
        const userFound = users.find(user => {
            return user.email == value;
        })
        if (userFound) {
            return true;
        } return false;
    }).withMessage('El e-mail es incorrecto.'), body('password').custom( (value)=> {
        const users = usersController.users();
        const userPassword = users.find(user => {
            return bcrypt.compareSync(value, user.password);
        })
        if (userPassword) {
            return true;
        } return false;}).withMessage('El password es incorrecto')
    ]
};

const validar = (req, res, next) => {
    next();
};

module.exports = {reglasDeValidacionDeUsuarios, ValidacionDelogin, validar}



