const loginController = {
  login: (req, res) => {
    res.render('login', { title: 'login' });
  }
}

module.exports = loginController;