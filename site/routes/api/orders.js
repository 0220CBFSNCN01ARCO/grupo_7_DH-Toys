var express = require('express');
var router = express.Router();
var ordersAPIController = require('../../controllers/api/ordersAPIController');

router.get('/', ordersAPIController.list)

module.exports = router;