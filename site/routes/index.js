var express = require('express');
var router = express.Router();
const products = require('../controllers/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' ,
                        products: products.allProductsWithImage()});
});

module.exports = router;
