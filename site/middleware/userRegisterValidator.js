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
    }).withMessage('E-mail ya existente'), check("password", "Password Invalido, minimo 4 caracteres")
        .isLength({ min: 4 })
        .custom((value, { req, loc, path }) => {
            if (value !== req.body.repeatPassword) {
                // trow error if passwords do not match
                throw new Error("Los passwords no coinciden");
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


/*const emailMiddleware = {
    verifyEmail: async (req, res, next) => {
        try {
            [body('email').custom(function (value) {
                const users = usersController.users();
                console.log(users);
                const userFound = users.find(user => {
                    return user.email == value;
                })
                if (userFound) {
                    return true
                } return false
            }).withMessage('E-mail ya existente')]
        } catch (error) {
            return next(error)
        }
    }
}*/


