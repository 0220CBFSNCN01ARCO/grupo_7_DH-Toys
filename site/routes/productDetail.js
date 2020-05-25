var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productsDetailController');

router.get('/detalle/:id', productosController.obtenerDetalle)

module.exports = router;