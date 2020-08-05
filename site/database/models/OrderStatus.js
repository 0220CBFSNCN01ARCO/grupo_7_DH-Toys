
module.exports = (sequelize, DataTypes) => {
  let alias = 'orders_status';

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false 
    },
    name: DataTypes.STRING
  };

  let config = {
    tablename: 'orders_status',
    timestamps: false,
    freezeTableName: true
  };

  const OrderStatus = sequelize.define(alias, cols, config);

  OrderStatus.associate = function(models) {
    OrderStatus.hasMany(models.orders,{
      as: "orderStatus",
      foreignKey: "idStatus"
    })
  }

  return OrderStatus;
}