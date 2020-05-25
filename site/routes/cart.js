var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController')

router.get('/cart', cartController.cart);

module.exports = router;