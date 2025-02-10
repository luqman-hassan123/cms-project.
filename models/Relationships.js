const Ministry = require("./Ministry");
const Department = require("./Department");
const Employee = require("./Employee");
const Car = require("./Car");
const Driver = require("./Driver");
const CarDriverReservation = require("./carDriverReservation");
const carEmployeeHistory = require("./carEmployeeHistory");
const employeeCarAllocation = require("./employeeCarAllocation"); 
const DriverCarHistory = require("./DriverCarHistory");
const Budget = require("./Budget");

// Ministry has many Departments
Ministry.hasMany(Department, { foreignKey: "ministryId", onDelete: "CASCADE", as: "departments" });
Department.belongsTo(Ministry, { foreignKey: "ministryId", as: "ministry" });
// Department has many Employees
Department.hasMany(Employee, { foreignKey: "departmentId", onDelete: "CASCADE" });
Employee.belongsTo(Department, { foreignKey: "departmentId", as: "department" });
//car driver
Car.belongsTo(Department, { foreignKey: "departmentId", as: "department" });

// Car-Driver Reservation Relationship
Car.hasMany(CarDriverReservation, { foreignKey: "carId", onDelete: "CASCADE" });
Driver.hasMany(CarDriverReservation, { foreignKey: "driverId", onDelete: "CASCADE" });
CarDriverReservation.belongsTo(Car, { foreignKey: "carId" });
CarDriverReservation.belongsTo(Driver, { foreignKey: "driverId" });
// Car-Employee History Relationship (Fixed foreign key)
Car.hasMany(carEmployeeHistory, { foreignKey: "carId", onDelete: "CASCADE" });
Employee.hasMany(carEmployeeHistory, { foreignKey: "employeeId", onDelete: "CASCADE" }); 
carEmployeeHistory.belongsTo(Car, { foreignKey: "carId" });
carEmployeeHistory.belongsTo(Employee, { foreignKey: "employeeId" });
// Employee-Car Allocation Relationship (Fixed foreign key and capitalization)
Employee.hasMany(employeeCarAllocation, { foreignKey: "employeeId", onDelete: "CASCADE" });
Car.hasMany(employeeCarAllocation, { foreignKey: "carId", onDelete: "CASCADE" });
employeeCarAllocation.belongsTo(Employee, { foreignKey: "employeeId" }); 
employeeCarAllocation.belongsTo(Car, { foreignKey: "carId" });
// Driver-Car History Relationship
Driver.hasMany(DriverCarHistory, { foreignKey: "driverId", onDelete: "CASCADE" });
Car.hasMany(DriverCarHistory, { foreignKey: "carId", onDelete: "CASCADE" });
DriverCarHistory.belongsTo(Driver, { foreignKey: "driverId" });
DriverCarHistory.belongsTo(Car, { foreignKey: "carId" });
// Department and Budget Relationship
Department.hasMany(Budget, { foreignKey: "departmentId" });
Budget.belongsTo(Department, { foreignKey: "departmentId" });

module.exports = {
  Ministry,
  Department,
  Employee,
  Car,
  Driver,
  CarDriverReservation,
  carEmployeeHistory,
  employeeCarAllocation, 
  DriverCarHistory,
  Budget,
};
