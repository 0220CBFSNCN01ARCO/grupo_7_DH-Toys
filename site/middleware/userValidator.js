const { check, valiationResult, body } = require('express-validator');
const bcrypt = require('bcrypt');
const db = require("../database/models");

const reglasDeValidacionDeUsuarios = () => {
    return [body('email').custom( async value => {
        let user =  await db.Users.findOne({
            where: {
                email: value
              }
        });
        if (user) {
            return Promise.reject();
        }
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
};

const userEditValidator = () => {
    return [body('email').custom( async value => {
        let user =  await db.Users.findOne({
            where: {
                email: value
              }
        });
        if (user) {
            return Promise.reject();
        }
    }).withMessage('El e-mail ya está registrado.')
    ]
}

const validacionDelogin =  () => {
    return  [body('email').custom(async value => {
        let user =  await db.Users.findOne({
            where: {
                email: value
              }
        });
        if(user == null){
            return Promise.reject();
        }
    }).withMessage('El e-mail es incorrecto.'), body('password').custom( async (value)=> {
        let users = await db.Users.findAll()
        const userPassword = users.find(user => {
            return bcrypt.compareSync(value, user.password);
        })
            if (userPassword == null) {
                return Promise.reject();
            }}).withMessage('El password es incorrecto')
    ]
};

const userLogged = (req,res,next) => {
    if(req.session.userLogueado){
        res.redirect('/users/profile')
    }
    next()
}

const userNotLogged = (req,res,next) => {
    if(!req.session.userLogueado){
        res.redirect('/users/login')
    }
    next()
}

const adminValidator = (req, res, next) => {
    if(req.session.userLogueado[0].idCategoryUser != 1){
        res.redirect('/users/profile')
    }
    next()
}

const validar = (req, res, next) => {
    next();
};

module.exports = {reglasDeValidacionDeUsuarios, validacionDelogin, validar, userLogged, userNotLogged, adminValidator, userEditValidator}



