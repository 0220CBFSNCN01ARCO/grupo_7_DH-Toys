

module.exports = (sequelize, DataTypes) => {
  let alias = 'Users';

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
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idCategoryUser: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN  
  }

  let config = {
    tablename: 'users',
    timestamps: false
  }

  const User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.belongsTo(models.categories_users,{
      as: "userCategory",
      foreignKey: "idCategoryUser"
    })
  }
  
  return User;
}