var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

<<<<<<< HEAD
router.get('/detalle', function(req, res, next) {
  res.render('productDetail', { title: 'Detalle de Producto' });
});
=======
router.get('/detalle', productosController.detalleProductos)
>>>>>>> 6568b2d639633f972005f563311d26643e218643

module.exports = router;