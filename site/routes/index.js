var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const {userNotLogged} = require('../middleware/userValidator');

router.get('/', indexController.index)
router.get('/products', userNotLogged, indexController.allProducts)
router.post('/search',userNotLogged, indexController.search)

module.exports = router;
