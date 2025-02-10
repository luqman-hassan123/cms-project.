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

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log('CarDriverReservation Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

module.exports = CarDriverReservation;
