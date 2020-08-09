const db = require("../../database/models");
const sequelize = require('sequelize');

const apiProducts = {
  list: async (req, res) => {
    try {
      let listProducts = await db.Products.findAll({
        attributes: ['id', 'name', 'description'],
        include: [{ association: 'productCategory' }]
      });

      for (let i = 0; i < listProducts.length; i++) {
        listProducts[i].setDataValue("description", `http://localhost:3030/api/products/${i + 1}`);
      }

      let categoryByGroup = await db.Products.findAll({
        attributes: ['productCategory.name', [sequelize.fn('COUNT', sequelize.col('products.id')), 'count']],
        include: [{ association: 'productCategory', attributes: []}],
        group: ['productCategory.name'],
        raw:true
      });

      let respuesta = {
        meta: {
          count: listProducts.length,
          categoryByGroup,
          products: listProducts
        }
      }
      res.json(respuesta);

    } catch (error) {
      return res.status(500).json({ ok: false, error })
    }

  },
  description: async (req, res) => {

    try {
      let productDescription = await db.Products.findByPk(req.params.id, {
        
        attributes: ['id', 'name', 'description','image', 'price', 'age'],
        include: [{ association: 'productCategory', attributes: ['name']}],
      });

      if (!productDescription) {
        return res.status(404).json({ ok: false, msg: 'No se encontró el producto buscado' });
      }

      productDescription.setDataValue("imgProduct", `http://localhost:3030/images/products/${productDescription.image}`);

      res.json(productDescription);

    } catch (error) {
      console.error(error)
    }

  }
}

module.exports = apiProducts;