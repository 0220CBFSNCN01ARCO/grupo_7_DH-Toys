const products = require('./products');

const productosController = {
  obtenerDetalle: (req, res) => {
    const productId = req.params.id;
    const productosConImagenes = products.allProductsWithImage();
    const productoFiltrado = productosConImagenes.filter(product => {
      return product.id == productId;
    })
    res.render('detalleProducto', { title: 'Detalle', producto: productoFiltrado })
  }
}


module.exports = productosController;