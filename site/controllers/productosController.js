const productosController = {
  detalleProductos: (req, res) => {
    res.render('detalleProducto', { title: 'detalle' });
  }
}

module.exports = productosController;