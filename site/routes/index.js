var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const {userNotLogged} = require('../middleware/userValidator');

router.get('/', indexController.index)
router.get('/products', userNotLogged, indexController.allProducts)
router.get('/search',userNotLogged, indexController.search)
router.post('/search',userNotLogged, indexController.search)
router.get('/0-a-3', userNotLogged, indexController.byAgeLessThanThree)
router.get('/3-a-7', userNotLogged, indexController.byAgeBetweenthreeAndSeven)
router.get('/7-en-adelante', userNotLogged, indexController.byAgeSevenOnwards)
router.get('/aboutUs', indexController.aboutUs)


module.exports = router;
