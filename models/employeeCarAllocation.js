const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const EmpCarAllocation = sequelize.define(
  "EmpCarAllocation",
  {
    empCarAlloId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carId: {
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

// EmpCarAllocation.associate = (models) => {
//   EmpCarAllocation.belongsTo(models.Employee, { foreignKey: "employeeId" });
//   EmpCarAllocation.belongsTo(models.Car, { foreignKey: "carId" });
// };

(async () => {
  await sequelize.sync({ alter: true });
})();

module.exports = EmpCarAllocation;