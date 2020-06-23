module.exports = (sequelize, DataTypes) => {
  let alias = 'Categories_Products';

  let cols = {
    id_category_product: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  let config = {
    tablename: 'categories_products',
    timestamps: false
  }

  const CategoriaProducto = sequelize.define(alias, cols, config);

  return CategoriaProducto;

}