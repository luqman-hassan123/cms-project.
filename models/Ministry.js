const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Ministry = sequelize.define(
  "Ministry",
  {
    ministryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
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

module.exports = Ministry;
