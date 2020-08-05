module.exports = (sequelize, DataTypes) => {
  let alias = 'orders';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    description: DataTypes.TEXT,
    amount: DataTypes.FLOAT,
    idStatus: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER
  };

  let config = {
    tablename: 'orders',
    timestamps: false
  };

  const Order = sequelize.define(alias, cols, config);

  Order.associate = function(models) {
    Order.hasMany(models.orders_products,{
      as: "order",
      foreignKey: "idOrder"
    }),
    Order.belongsTo(models.orders_status,{
      as: "orderStatus",
      foreignKey: "idStatus"
    }),
    Order.belongsTo(models.Users,{
      as: "users",
      foreignKey: "idUser"
    })
  }

  return Order;
}