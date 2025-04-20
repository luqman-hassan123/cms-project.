const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Permission = sequelize.define("permissions", {
  permissionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  permissionName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Permission;
