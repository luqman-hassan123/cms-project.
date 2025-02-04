const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Car = require("./Car");
const Employee = require("./Employee"); 

const CarEmployeeHistory = sequelize.define(
  "CarEmployeeHistory",
  {
    carEmployeeHistoryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true, 
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
  await sequelize.sync({ alter: true });
})();

module.exports = CarEmployeeHistory;
