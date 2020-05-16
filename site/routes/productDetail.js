var express = require('express');
var router = express.Router();

router.get('/detalle', function(req, res, next) {
  res.render('productDetail', { title: 'detalle' });
});

module.exports = router;