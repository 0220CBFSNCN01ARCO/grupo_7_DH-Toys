

module.exports = (sequelize, DataTypes) => {
  let alias = "Products";

  let cols = {
    id_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    age: DataTypes.INTEGER,
    id_category_product: DataTypes.INTEGER
  };

  let config = {
      tablename: "products",
      timestamps: false
  }

  const Producto = sequelize.define(alias,cols, config);

  return Producto;
}