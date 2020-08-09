var express = require('express');
var router = express.Router();
var productsAPIController = require('../../controllers/api/productsAPIController');

router.get('/', productsAPIController.list)
router.get('/:id', productsAPIController.description)

module.exports = router;