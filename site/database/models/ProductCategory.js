module.exports = (sequelize, DataTypes) => {
  let alias = 'categories_products';

  let cols = {
    id: {
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

  const ProductCategory = sequelize.define(alias, cols, config);

  ProductCategory.associate = function(models) {
    ProductCategory.hasMany(models.Products,{
      as: "products",
      foreignKey: "idCategoryProduct"
    })
  }

  return ProductCategory;

}