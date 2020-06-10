const products = require('./products');

const indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Inicio',
                          products: products.allProductsWithImage(),
                          user: req.session.userLogueado});
  },
  allProducts: (req, res) =>{
    const allProducsWithImage = products.allProductsWithImage();
    res.render('products',{title: 'Productos',
                           products: allProducsWithImage,
                           user: req.session.userLogueado})
  }
}

module.exports = indexController;