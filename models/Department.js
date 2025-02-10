const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Department = sequelize.define(
  "Department",
  {
    departmentId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ministryId: {
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

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log("department table synchronized successfully.");
  } catch (error) {
    console.error("Error during department synchronization:", error);
  }
})();

module.exports = Department;
