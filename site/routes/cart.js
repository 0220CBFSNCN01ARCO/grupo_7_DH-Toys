var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController')

<<<<<<< HEAD
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Carrito' });
});
=======
router.get('/cart', cartController.cart);
>>>>>>> 6568b2d639633f972005f563311d26643e218643

module.exports = router;