const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Ministry = require("./Ministry");

const Department = sequelize.define(
  "Department",
  {
    dep_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ministry_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

//Ministry.hasMany(Department, { foreignKey: "ministry_id" });

(async () => {
    await sequelize.sync({ alter: true }); 
})();

module.exports = Department;
