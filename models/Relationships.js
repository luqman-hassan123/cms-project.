const Ministry = require("./Ministry");
const Department = require("./Department");
const Employee = require("./Employee");
const Car = require("./Car");
const Driver = require("./Driver");
const CarDriverReservation = require("./carDriverReservation");
const CarEmployeeHistory = require("./carEmployeeHistory");
const EmpCarAllocation = require("./EmpCarAllocation");
const DriverCarHistory = require("./DriverCarHistory");

// Ministry has many Departments
Ministry.hasMany(Department, { foreignKey: "ministry_id", onDelete: "CASCADE" });
Department.belongsTo(Ministry, { foreignKey: "ministry_id" });
// Department has many Employees
Department.hasMany(Employee, { foreignKey: "dep_id", onDelete: "CASCADE" });
Employee.belongsTo(Department, { foreignKey: "dep_id" });
// Car-Driver Reservation Relationship
Car.hasMany(CarDriverReservation, { foreignKey: "carId", onDelete: "CASCADE" });
Driver.hasMany(CarDriverReservation, { foreignKey: "driverId", onDelete: "CASCADE" });
CarDriverReservation.belongsTo(Car, { foreignKey: "carId" });
CarDriverReservation.belongsTo(Driver, { foreignKey: "driverId" });
// Car-Employee History Relationship
Car.hasMany(CarEmployeeHistory, { foreignKey: "carId", onDelete: "CASCADE" });
Employee.hasMany(CarEmployeeHistory, { foreignKey: "emp_id", onDelete: "CASCADE" });
CarEmployeeHistory.belongsTo(Car, { foreignKey: "carId" });
CarEmployeeHistory.belongsTo(Employee, { foreignKey: "emp_id" });
// Employee-Car Allocation Relationship
Employee.hasMany(EmpCarAllocation, { foreignKey: "emp_id", onDelete: "CASCADE" });
Car.hasMany(EmpCarAllocation, { foreignKey: "carId", onDelete: "CASCADE" });
EmpCarAllocation.belongsTo(Employee, { foreignKey: "emp_id" });
EmpCarAllocation.belongsTo(Car, { foreignKey: "carId" });
// Driver-Car History Relationship
Driver.hasMany(DriverCarHistory, { foreignKey: "driverId", onDelete: "CASCADE" });
Car.hasMany(DriverCarHistory, { foreignKey: "carId", onDelete: "CASCADE" });
DriverCarHistory.belongsTo(Driver, { foreignKey: "driverId" });
DriverCarHistory.belongsTo(Car, { foreignKey: "carId" });

module.exports = {
  Ministry,
  Department,
  Employee,
  Car,
  Driver,
  CarDriverReservation,
  CarEmployeeHistory,
  EmpCarAllocation,
  DriverCarHistory,
};
