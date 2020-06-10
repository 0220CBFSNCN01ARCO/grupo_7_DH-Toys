const products = require('./products');
const jsonOperations = require('./jsonLogic');
const path = require('path');

const adminController = {
  adminProducts: (req, res, next) => {
      const productsList = products.allProductsWithImage();
    res.render('admin/productos', {
      title: 'Admin',
      products: productsList
    })
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin' });
  },
  productEditor: (req, res) => {
    const idProducto = req.params.id;
    const filteredProduct = products.productById(idProducto);
    res.render('admin/productEditor', {
      title: 'Admin',
      product: filteredProduct
    });
  },
  editProduct: (req, res, next) => {
    const productsList = products.products();
    const productId = req.params.id;
    const editedProduct = req.body;
    productsList.map(product => {
      if (product.id == productId) {
        product.name = editedProduct.name;
        product.description = editedProduct.description;
        product.category = editedProduct.category;
        product.image = req.file.originalname;
        product.price = editedProduct.price;
      }
    })
    jsonOperations.writeJSON(productsList, path.join('site', 'data', 'products.json'));
    res.redirect('/admin')
  },
  addProduct: (req, res, next) => {
    const productToAdd = {
      id: products.lastProductId() + 1,
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      image: req.file.originalname,
      price: req.body.price
    }
    jsonOperations.addToJSON(productToAdd, path.join('site', 'data', 'products.json'))
    res.redirect('/admin')
  },
  deleteProduct: (req, res) => {
    const productId = req.params.id;
    const newProductsList = products.allProductsDifferentsById(productId);
    jsonOperations.writeJSON(newProductsList, path.join('site', 'data', 'products.json'));
    res.redirect('/admin')
  }
}

module.exports = adminController;