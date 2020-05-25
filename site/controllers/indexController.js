const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Home' });
  }
}


module.exports = indexController;