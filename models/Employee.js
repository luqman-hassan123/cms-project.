const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Department = require("./Department");

const Employee = sequelize.define(
  "Employee",
  {
    emp_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    emp_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.STRING,
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
  await sequelize.sync({ alter: true }); 
})();

module.exports = Employee;
