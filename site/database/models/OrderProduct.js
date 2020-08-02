
module.exports = (sequelize, DataTypes) => {
  let alias = 'orders_products';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    idProduct: DataTypes.INTEGER,
    idOrder: DataTypes.INTEGER
  };

  let config = {
    tablename: 'orders_products',
    timestamps: false
  };

  const OrdersProducts = sequelize.define(alias, cols, config);

  OrdersProducts.associate = function(models) {
    OrdersProducts.belongsTo(models.Products,{
      as: "products",
      foreignKey: "idProduct"
    }),
    OrdersProducts.belongsTo(models.orders,{
      as: "Order",
      foreignKey: "idOrder"
    })
  }

  return OrdersProducts;
}