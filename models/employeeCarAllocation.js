const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const EmpCarAllocation = sequelize.define(
  "EmpCarAllocation",
  {
    empCarAllocationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    employeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

module.exports = EmpCarAllocation;