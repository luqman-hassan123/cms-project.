const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const CarDriverReservation = sequelize.define(
  "CarDriverReservation",
  {
    carDriverReservationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driverId: {
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

module.exports = CarDriverReservation;
