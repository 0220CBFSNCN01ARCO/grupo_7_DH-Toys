var express = require('express');
var router = express.Router();
var dbController = require('../controllers/dbController');


router.get('/', dbController.products);

module.exports = router;