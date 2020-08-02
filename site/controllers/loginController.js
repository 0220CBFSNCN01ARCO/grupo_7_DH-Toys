const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')
const db = require("../database/models");
const session = require('express-session');

const loginController = {
  login: (req, res) => {
    res.render('login', {
      title: 'login',
      user: req.session.userLogueado
    });
  },
  verify: (req, res, next) => {
    const errors = validationResult(req);
    const currentUser = req.body;
    if (errors.isEmpty()) {
      db.Users.findAll({
        include: [{ association: "userCategory" }],
        where: {
          email: currentUser.email
        }
      })
        .then(user => {
          if (user && user[0].userCategory.name == 'Admin') {
            req.session.userLogueado = user;
            res.redirect('/admin');
          } else {
            req.session.userLogueado = user;
            res.redirect('/products');
          }
        })
    } else {
      return res.render('login', {
        title: 'login',
        errors: errors.errors,
        user: req.session.userLogueado,
        currentUser: currentUser
      })
    }
  },
  register: function (req, res, next) {
    res.render('register', { title: 'Register', user: req.session.userLogueado })
  },
  addUser: function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      db.Users.create({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.originalname,
        idCategoryUser: 2,
        phoneNumber: null,
        country: null
      })
      res.redirect('/users/login');
    } else {
      const userToReload = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,

      }
      return res.render('register', {
        title: 'Register',
        errors: errors.errors,
        userToReload: userToReload,
        user: req.session.userLogueado
      })
    }
  },
  logout(req, res, next) {
    req.session.destroy((err) => {
      res.redirect('/users/login')
    })
  },
  profile(req, res, next) {
    res.render('profile', {
      title: 'Perfil de Usuario',
      user: req.session.userLogueado
    })
  },
  updateProfile: async (req, res) => {
    try{
      let currentUser = await db.Users.findByPk(req.params.id)
      await db.Users.update({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        country: req.body.country,
        avatar: req.file.originalname
      }, {
        where: {
          id: req.params.id
        }
      })/*
        req.session.userLogueado = {
          id: currentUser.id,
          name: req.body.name,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
          country: req.body.country,
          avatar: req.file.originalname,
          passwowd: currentUser.password,
          email: currentUser.email,
          idCategoryUser: currentUser.idCategoryUser,
          status: currentUser.status
        }*/
        req.session.destroy((err) => {
          res.redirect('/users/login')
        })
      //res.redirect('/products')
    } catch (error) {
      res.send("error")
    }
    
  }
}

module.exports = loginController;