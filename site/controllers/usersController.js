const jsonOperatios = require('./jsonLogic')
const path = require('path')


const usersController = {
  users: function() {
    return usersList = jsonOperatios.readJSON(path.join('site','data','users.json'))
  },
  profile: function (req, res, next) {
    const user = req.session.userLogueado; 
    res.render('profile', {title: 'Profile', 
                           user: user})
  }
}

module.exports = usersController;