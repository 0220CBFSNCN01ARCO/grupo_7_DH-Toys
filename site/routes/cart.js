var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController')
const {userNotLogged} = require('../middleware/userValidator');

router.get('/', userNotLogged, cartController.cart);
router.get('/addToCart/:id', userNotLogged, cartController.addItem)
router.get('/removeItem/:id/:from', userNotLogged, cartController.removeItem)
router.post('/updateCart', userNotLogged, cartController.updateCart)

module.exports = router;