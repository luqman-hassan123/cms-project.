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
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
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

module.exports = Fuel;

