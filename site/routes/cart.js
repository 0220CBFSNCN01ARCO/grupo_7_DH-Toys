var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController')
const {userNotLogged} = require('../middleware/userValidator');
const paymentController = require('../controllers/paymentController')

router.get('/', userNotLogged, cartController.cart);
router.get('/addToCart/:id', userNotLogged, cartController.addItem)
router.get('/removeItem/:id', userNotLogged, cartController.removeItem)
router.post('/updateCart', userNotLogged, cartController.updateCart)

//MERCADOPAGO
router.get('/carritoml', paymentController.init);
router.get('/approved', paymentController.successPayment);
router.get('/rejected', paymentController.rejectedPayment);
module.exports = router;