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
            type: DataTypes.DATEONLY,
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

module.exports = Maintenance;