const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Car = sequelize.define(
  "Car",
  {
    carId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carModel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carMake: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carCondition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    carDescription:{
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

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log("Car table synchronized successfully.");
  } catch (error) {
    console.error("Error during car synchronization:", error);
  }
})();


module.exports = Car;
