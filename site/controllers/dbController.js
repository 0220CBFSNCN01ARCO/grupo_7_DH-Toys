const db = require("../database/models");

const dbController = {
  products: (req, res) => {
    db.Products.findAll({
      include: [{association: "productCategory"}]
    })
    .then((products) => {
      res.render('index', { title: 'Inicio',
                            products: products,
                            user: req.session.userLogueado});
    });
  }
}

module.exports = dbController;