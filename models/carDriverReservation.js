const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Car = require("./Car"); 
const Driver = require("./Driver"); 

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

// CarDriverReservation.belongsTo(Car, { foreignKey: "carId", onDelete: "CASCADE" });
// CarDriverReservation.belongsTo(Driver, { foreignKey: "driverId", onDelete: "CASCADE" });

// Car.hasOne(CarDriverReservation, { foreignKey: "carId" });
// Driver.hasOne(CarDriverReservation, { foreignKey: "driverId" });

(async () => {
  await sequelize.sync({ alter: true });})

module.exports = CarDriverReservation;
