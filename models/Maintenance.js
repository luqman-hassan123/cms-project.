const { DataTypes} =  require("sequelize")
const sequelize = require ("../config/dbConfig")

const Maintenance = sequelize.define(
    "maintenance",
    {
        maintenanceId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        carId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        maintenanceDate:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        maintenanceCost:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        maintenanceDescription:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
);

(async () => {
    try {
      await sequelize.sync({ alter: true });
      console.log("maintenance table synchronized successfully.");
    } catch (error) {
      console.error("Error during maintenance synchronization:", error);
    }
  })();

module.exports = Maintenance;