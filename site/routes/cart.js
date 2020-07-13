var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController')
const {userNotLogged} = require('../middleware/userValidator');

router.get('/cart', userNotLogged, cartController.cart);

module.exports = router;