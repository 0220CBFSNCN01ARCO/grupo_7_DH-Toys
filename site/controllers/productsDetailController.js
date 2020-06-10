const products = require('./products');

const productosController = {
  obtenerDetalle: (req, res) => {
    const productId = req.params.id;
    const productoFiltradoConImagenes = products.productWithImageById(productId);
    res.render('detalleProducto', { title: 'Detalle', 
                                    producto: productoFiltradoConImagenes,
                                    user: req.session.userLogueado })
  }
}

module.exports = productosController;