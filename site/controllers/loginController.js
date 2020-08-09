const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')
const db = require("../database/models");
const session = require('express-session');

const loginController = {
  login: (req, res) => {
    res.render('login', {
      title: 'login',
      user: req.session.userLogueado,
      cart: req.session.cart
    });
  },
  verify: (req, res, next) => {
    const errors = validationResult(req);
    const currentUser = req.body;
    const cartItems = []
    const cart = {cartItems, total: 0 }
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
            req.session.cart = cart;
            res.redirect('/admin');
          } else {
            req.session.userLogueado = user;
            req.session.cart = cart;
            res.redirect('/products');
          }
        })
    } else {
      return res.render('login', {
        title: 'login',
        errors: errors.errors,
        user: req.session.userLogueado,
        currentUser: currentUser,
        cart: req.session.cart
      })
    }
  },
  register: function (req, res, next) {
    res.render('register', { title: 'Register', user: req.session.userLogueado, cart: req.session.cart })
  },
  addUser: function (req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      if(typeof req.file != 'undefined'){
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
      }else{
        db.Users.create({
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          avatar: 'defaultUser.png',
          idCategoryUser: 2,
          phoneNumber: null,
          country: null
      })
    }
      res.redirect('/users/login');
    } else {
      const userToReload = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email
      }
      return res.render('register', {
        title: 'Register',
        errors: errors.errors,
        userToReload: userToReload,
        user: req.session.userLogueado,
        cart: req.session.cart
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
      user: req.session.userLogueado,
      cart: req.session.cart
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
      })
        req.session.destroy((err) => {
          res.redirect('/users/login')
        })
    } catch (error) {
      res.send("error")
    }
    
  }
}

module.exports = loginController;