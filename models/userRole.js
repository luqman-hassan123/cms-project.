const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const UserRole = sequelize.define(
  "userRoles",
  {
    userRoleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {  
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = UserRole;
