const usersController = require('./usersController')
const jsonOperations = require('./jsonLogic')
const path = require('path')
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')

const loginController = {
  login: (req, res) => {
    res.render('login', { title: 'login' });
  },
  verify: (req, res) => {
    const currentUser = req.body;
    const usersList = usersController.users();
    const userFiltered = usersList.filter(user => {
      return user.email == currentUser.email
    })
    if (toString(userFiltered.category) == "admin") {
      res.redirect('/admin')
    } else {
      res.redirect('/login')
    }
  },
  register: function (req, res, next) {
    res.render('register', { title: 'Register' })
  },
  addUser: function (req, res, next) {
    const errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      const userArray = jsonOperations.readJSON(path.join('site', 'data', 'users.json'));
      let lastUserId = 0;
      if (userArray !== undefined && userArray.length != 0) {
        lastUserId = userArray[userArray.length - 1].id;
      };
      const userToAdd = {
        id: (lastUserId + 1),
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.originalname
      };
      jsonOperations.addToJSON(userToAdd, path.join('site', 'data', 'users.json'));
      res.redirect('/products');
    }else{
      const userToReload = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email
      }
      return res.render('register',{title:'register',
                                    errors: errors.errors,
                                    user: userToReload})
    }
  }

}

module.exports = loginController;