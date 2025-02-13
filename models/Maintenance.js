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
        },
    },
    {
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
);

module.exports = Maintenance;