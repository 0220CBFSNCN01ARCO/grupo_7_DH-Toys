const db = require("../../database/models");
const sequelize = require('sequelize');

const apiOrders = {
  list: async (req, res) => {
    try {
      let listOrders = await db.orders.findAll({
        attributes: ['id', 'amount']
      });

      let sellingOrders = await db.orders.findAll({
        attributes: ['idStatus', [sequelize.fn('COUNT', sequelize.col('idStatus')), 'count']],
        where: { 'idStatus': 2 }
      })

      let approvedOrders = await db.orders.findAll({
        where: { 'idStatus': 2 },
        attributes: ['id', 'amount']
      });

      let total = 0;

      for (let i = 0; i < approvedOrders.length; i++) {
        total += approvedOrders[i].amount;
      }

      let respuesta = {
        meta: {
          count_orders: listOrders.length,
          orders: listOrders,
          count_approved_orders: approvedOrders.length,
          approved_orders: approvedOrders,
          total_amount: total,
          sellingOrders
        }
      }
      res.json(respuesta);

    } catch (error) {
      console.log(error);
    }

  }
}

module.exports = apiOrders;