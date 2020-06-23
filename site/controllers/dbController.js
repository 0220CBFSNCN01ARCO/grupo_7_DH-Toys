const db = require("../database/models");

const dbController = {
  connect: (req, res) => {
    db.Products.findAll().then((productos) => {
      res.render('dbtest', { productos });
    });
  }
}

module.exports = dbController;