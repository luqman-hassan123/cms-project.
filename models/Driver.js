const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Driver = sequelize.define(
  "Driver",
  {
    driverId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    departmentId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    driverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverLicenseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverAvailability: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, 
    },
    driverDescription: {
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

module.exports = Driver;
