const jsonOperatios = require('./jsonLogic')
const path = require('path')
let listaDeUsuarios = jsonOperatios.readJSON(path.join('site','data','users.json'))

const usersController = {
  users: function() {
    return usersList = jsonOperatios.readJSON(path.join('site','data','users.json'))
  },
  profile: function (req, res, next) {
    let user = listaDeUsuarios;
    res.render('profile', {title: 'Profile', user})
  }
}

module.exports = usersController;