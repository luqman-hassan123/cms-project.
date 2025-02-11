const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Department = sequelize.define(
  "Department",
  {
    departmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ministryId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = Department;
