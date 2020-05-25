var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const products = require('../controllers/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' ,
                        products: products.allProductsWithImage()});
});
=======
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index)
>>>>>>> 6568b2d639633f972005f563311d26643e218643

module.exports = router;
