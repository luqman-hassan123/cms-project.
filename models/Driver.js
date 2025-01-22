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
    driverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverLicenseNumber: {
      type: DataTypes.STRING,
      unique: true,
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

(async () => {
  await sequelize.sync({ alter: true }); 
})();

module.exports = Driver;
