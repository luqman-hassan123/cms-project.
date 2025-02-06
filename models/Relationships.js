const Ministry = require("./Ministry");
const Department = require("./Department");
const Employee = require("./Employee");
const Car = require("./Car");
const Driver = require("./Driver");
const CarDriverReservation = require("./carDriverReservation");
const CarEmployeeHistory = require("./carEmployeeHistory");
const employeeCarAllocation = require("./employeeCarAllocation");
const DriverCarHistory = require("./DriverCarHistory");
const Budget = require ('./Budget')

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
Employee.hasMany(employeeCarAllocation, { foreignKey: "emp_id", onDelete: "CASCADE" });
Car.hasMany(employeeCarAllocation, { foreignKey: "carId", onDelete: "CASCADE" });
employeeCarAllocation.belongsTo(Employee, { foreignKey: "emp_id" });
employeeCarAllocation.belongsTo(Car, { foreignKey: "carId" });
// Driver-Car History Relationship
Driver.hasMany(DriverCarHistory, { foreignKey: "driverId", onDelete: "CASCADE" });
Car.hasMany(DriverCarHistory, { foreignKey: "carId", onDelete: "CASCADE" });
DriverCarHistory.belongsTo(Driver, { foreignKey: "driverId" });
DriverCarHistory.belongsTo(Car, { foreignKey: "carId" });
//department and budget
Department.hasMany(Budget, { foreignKey: "dep_id" }); 
Budget.belongsTo(Department, { foreignKey: "dep_id" }); 

module.exports = {
  Ministry,
  Department,
  Employee,
  Car,
  Driver,
  CarDriverReservation,
  CarEmployeeHistory,
  employeeCarAllocation,
  DriverCarHistory,
  Budget,
};
