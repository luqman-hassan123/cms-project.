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

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Budget table synchronized successfully.");
  } catch (error) {
    console.error("Error during budget synchronization:", error);
  }
})();

module.exports = Budget;
