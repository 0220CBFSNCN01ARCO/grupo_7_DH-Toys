const db = require("../database/models");

const cartController = {
  cart: (req, res) => {
     db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 3,
      where: {
        status: true
      }
    })
    .then(products => {
      res.render('cart', { title: 'cart',
                            user: req.session.userLogueado,
                            products});
    })
    
  }
}

module.exports = cartController;