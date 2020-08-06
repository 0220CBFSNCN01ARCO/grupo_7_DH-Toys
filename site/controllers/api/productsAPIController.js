const db = require("../../database/models");
const sequelize = require('sequelize');

const apiProducts = {
  list: async (req, res) => {
    try {
      let listProducts = await db.Products.findAll({
        attributes: ['id', 'name', 'description', 'idCategoryProduct'],
        include: [{ association: 'productCategory' }]
      });

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

      productDescription.setDataValue("imgProduct", `http://localhost:3000/images/products/${productDescription.image}`);

      res.json(productDescription);

    } catch (error) {
      console.error(error)
    }

  }
}

module.exports = apiProducts;