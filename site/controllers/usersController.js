const jsonOperatios = require('./jsonLogic')
const path = require('path')

const usersController = {
  users: function() {
    return usersList = jsonOperatios.readJSON(path.join('site','data','users.json'))
  }
}

module.exports = usersController;