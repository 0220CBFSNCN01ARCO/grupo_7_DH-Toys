const products = require('./products');

const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Home',
                          products: products.allProductsWithImage()});
  },
  allProducts: (req, res) =>{
    const allProducsWithImage = products.allProductsWithImage();
    res.render('products',{title: 'Product',
                           products: allProducsWithImage})
  }
}

module.exports = indexController;