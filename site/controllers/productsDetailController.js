const db = require("../database/models");

const productosController = {
  obtenerDetalle: async (req, res) => {
    try {
      const product = await db.Products.findByPk(req.params.id)
      res.render('detalleProducto', {
        title: 'Detalle',
        producto: product,
        user: req.session.userLogueado,
        cart: req.session.cart
      })
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = productosController;