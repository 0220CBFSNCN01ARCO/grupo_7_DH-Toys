const products = require('./products');
const operacionesJSON = require('./jsonLogic');
const path = require('path');
const adminController = {
  adminProducts: (req, res) => {
    const productsList = products.allProductsWithImage();
    res.render('admin/productos', { title: 'Admin',
                                    products: productsList });
  },
  productRegister: (req, res) => {
    res.render('admin/productRegister', { title: 'Admin' });
  },
  productEditor: (req, res) => {
    const idProducto = req.params.id;
    const productoFiltrado = products.productById(idProducto);
    res.render('admin/productEditor', { title: 'Admin',
                                        producto: productoFiltrado});
  },
  editProduct: (req, res) =>{
    console.log('hola');
    const productsList = products.productos();
    const productId = req.params.id;
    const editedProduct = req.body;
    productsList.map(product => {
      if(product.id ==  productId){
          product.name = editedProduct.name;
          product.description = editedProduct.description;
          product.category = editedProduct.category;
          product.image = editedProduct.image;
          product.price = editedProduct.price;
      }
  })
  operacionesJSON.escribirJSON(productsList,path.join('site','data','products.json'));
  res.redirect('/admin')
  }
}

module.exports = adminController;