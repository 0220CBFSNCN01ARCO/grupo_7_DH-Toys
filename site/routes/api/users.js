var express = require('express');
var router = express.Router();
var usersAPIController = require('../../controllers/api/usersAPIController');

router.get('/', usersAPIController.list)
router.get('/:id', usersAPIController.description)

module.exports = router;