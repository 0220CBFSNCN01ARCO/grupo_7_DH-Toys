

module.exports = (sequelize, DataTypes) => {
  let alias = 'categories_users';

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
  }

  let config = {
    tablename: 'categories_users',
    timestamps: false
  }

  const UserCategory = sequelize.define(alias, cols, config);

  UserCategory.associate = function(models) {
    UserCategory.hasMany(models.Users,{
      as: "users",
      foreignKey: "idCategoryUser"
    })
  }

  return UserCategory;
}