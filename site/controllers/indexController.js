const db = require("../database/models");
const { Sequelize } = require('../database/models');

const indexController = {
  index: (req, res) => {
    db.Products.findAll({
      include: [{association: "productCategory"}],
      limit: 10
    })
    .then((products) => {
      res.render('index', { title: 'Inicio',
                            products: products,
                            user: req.session.userLogueado});
    });
  },
  allProducts: (req, res) =>{
    db.Products.findAll({
      include: [{association: "productCategory"}]
    })
    .then((products) => {
      res.render('products', { title: 'Productos',
                              products: products,
                              user: req.session.userLogueado});
    });
  }
}

module.exports = indexController;