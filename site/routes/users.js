var express = require('express');
var router = express.Router();
const usersControllers = require('../controllers/usersController')
/* GET users listing. */
router.get('/', usersControllers.users);

module.exports = router;
