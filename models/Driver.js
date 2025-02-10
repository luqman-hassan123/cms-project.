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
  try {
    await sequelize.sync({ alter: true }); 
    console.log('Driver Database synced successfully');
  } catch (error) {
    console.error('Error syncing Driver table database:', error);
  }
})();

module.exports = Driver;
