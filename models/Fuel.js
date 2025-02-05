const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Fuel = sequelize.define(
  "Fuel",
  {
    fuelId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fuelQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fuelPrice:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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
    console.log("Fuel table synchronized successfully.");
  } catch (error) {
    console.error("Error during fuel synchronization:", error);
  }
})();

module.exports = Fuel;

