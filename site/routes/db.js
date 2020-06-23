var express = require('express');
var router = express.Router();
var dbController = require('../controllers/dbController');


router.get('/', dbController.connect);

module.exports = router;