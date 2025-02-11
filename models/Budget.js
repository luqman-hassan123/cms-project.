const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Budget = sequelize.define(
  "Budget",
  {
    budgetId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    newCarBudget: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    maintenanceBudget: {
      type: DataTypes.FLOAT,
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

module.exports = Budget;
