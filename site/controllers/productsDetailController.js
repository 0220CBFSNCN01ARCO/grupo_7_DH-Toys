const products = require('./products');
const db = require("../database/models");

const productosController = {
  obtenerDetalle: (req, res) => {
    db.Products.findByPk(req.params.id)
    .then(product => {
      res.render('detalleProducto', { title: 'Detalle', 
                                      producto: product,
                                      user: req.session.userLogueado })

    })
  }
}

module.exports = productosController;