const usersController = require('./usersController')
const jsonOperations = require('./jsonLogic')
const path = require('path')
const bcrypt = require('bcrypt');
const { check, validationResult, body } = require('express-validator')

const loginController = {
  login: (req, res) => {
    res.render('login', { title: 'login', 
                          user: req.session.userLogueado});
  },
  verify: (req, res, next) => {
    const errors = validationResult(req);
    const currentUser = req.body;
    if (errors.isEmpty()) {
    const usersList = usersController.users();
    const userFiltered = usersList.filter(user => {
      return user.email == currentUser.email
    })
    if (userFiltered != null && userFiltered[0].category == 1) {
      req.session.userLogueado = userFiltered;
      res.redirect('/admin');
    }else{
      req.session.userLogueado = userFiltered;
      res.redirect('/products');
    }
  } else { return res.render('login',{ title:'login',
                                       errors: errors.errors,
                                       user: req.session.userLogueado,
                                       currentUser: currentUser})}
  },
  register: function (req, res, next) {
    res.render('register', { title: 'Register', user: req.session.userLogueado })
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
        avatar: req.file.originalname,
        category: 2
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