const cartController = {
  cart: (req, res) => {
    res.render('cart', { title: 'cart',
                         user: req.session.userLogueado});
  }
}

module.exports = cartController;