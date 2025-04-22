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
  description: {
    type: DataTypes.STRING,
    allowNull: true,
}
},
{
timestamps: true,
createdAt: "created_at", 
updatedAt: "updated_at", 
}
);

module.exports = Permission;
