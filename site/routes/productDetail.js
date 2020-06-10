var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productsDetailController');
const {userNotLogged} = require('../middleware/userValidator');

router.get('/detalle/:id',userNotLogged, productosController.obtenerDetalle)

module.exports = router;