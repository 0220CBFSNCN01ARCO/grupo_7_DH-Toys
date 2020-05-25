const cartController = {
  cart: (req, res) => {
    res.render('cart', { title: 'cart' });
  }
}

module.exports = cartController;