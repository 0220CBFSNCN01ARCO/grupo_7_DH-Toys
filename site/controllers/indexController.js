const db = require("../database/models");
const { Sequelize } = require('../database/models');

const indexController = {
  index: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      limit: 10,
      where: {
        status: true
      }
    })
      .then((products) => {
        res.render('index', {
          title: 'Inicio',
          products: products,
          user: req.session.userLogueado,
          cart: req.session.cart
        });
      }); 
  },
  allProducts: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        status: true
      }
    })
      .then((products) => {
        res.render('products', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado,
          cart: req.session.cart
        });
      });
  }, search: (req, res) => {
    const toFind = req.body.search
    db.Products.findAll({
      where: {
        name: {
          [Sequelize.Op.like]: '%' + toFind + '%'
        }
      }
    })
      .then(products => {
        res.render('search', { title: 'search', products, user: req.session.userLogueado, search: toFind, cart: req.session.cart })
      })
  }, byAgeLessThanThree: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.lte]: 3},
        status: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado
        });
      });
  }, byAgeBetweenthreeAndSeven: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.between]: [4, 7]},
        status: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado,
          cart: req.session.cart
        });
      });
  }, byAgeSevenOnwards: (req, res) => {
    db.Products.findAll({
      include: [{ association: "productCategory" }],
      where: {
        age: {[Sequelize.Op.gte]: 8},
        status: true
      }
    })
      .then((products) => {
        res.render('forAge', {
          title: 'Productos',
          products: products,
          user: req.session.userLogueado,
          cart: req.session.cart
        });
      });
  }, aboutUs: (req, res) => {
    res.render('aboutUs', { title: 'aboutUs',
                            user: req.session.userLogueado,
                            cart: req.session.cart});
  },
}

module.exports = indexController;