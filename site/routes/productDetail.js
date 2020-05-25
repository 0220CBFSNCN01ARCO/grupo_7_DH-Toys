var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController');

router.get('/detalle', productosController.detalleProductos)

module.exports = router;