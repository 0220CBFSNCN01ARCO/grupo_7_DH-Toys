const products = require('./products');
const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Home',
                          products: products.allProductsWithImage()});
  }
}

module.exports = indexController;