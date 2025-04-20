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
const Fuel = require("./Fuel");
const Maintenance = require("./Maintenance"); 
const userRole = require("./userRole")
const permission = require("./permission");

function setupRelationships(){
// Ministry has many Departments
Ministry.hasMany(Department, { foreignKey: "ministryId", onDelete: "CASCADE"});
Department.belongsTo(Ministry, { foreignKey: "ministryId" });
// Department has many Employees
Department.hasMany(Employee, { foreignKey: "departmentId", onDelete: "CASCADE" });
Employee.belongsTo(Department, { foreignKey: "departmentId", });
//car department 
Department.hasMany(Car, { foreignKey: "departmentId", onDelete: "CASCADE" });
Car.belongsTo(Department, { foreignKey: "departmentId", });
// **Driver belongs to Department**
Department.hasMany(Driver, { foreignKey: "departmentId", onDelete: "CASCADE"});
Driver.belongsTo(Department, { foreignKey: "departmentId",});
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
Employee.hasMany(employeeCarAllocation, { foreignKey: "employeeId", onDelete: "CASCADE"});
Car.hasMany(employeeCarAllocation, { foreignKey: "carId", onDelete: "CASCADE" });
employeeCarAllocation.belongsTo(Employee, { foreignKey: "employeeId"  }); 
employeeCarAllocation.belongsTo(Car, { foreignKey: "carId"});
// Driver-Car History Relationship
Driver.hasMany(DriverCarHistory, { foreignKey: "driverId", onDelete: "CASCADE" });
Car.hasMany(DriverCarHistory, { foreignKey: "carId", onDelete: "CASCADE" });
DriverCarHistory.belongsTo(Driver, { foreignKey: "driverId" });
DriverCarHistory.belongsTo(Car, { foreignKey: "carId" });
// Department and Budget Relationship
Department.hasMany(Budget, { foreignKey: "departmentId" });
Budget.belongsTo(Department, { foreignKey: "departmentId" });
//car-fuel
Car.hasMany(Fuel, { foreignKey: 'carId', onDelete: 'CASCADE' });
Fuel.belongsTo(Car, { foreignKey: 'carId' });
//maintenance-car
Car.hasMany(Maintenance, { foreignKey: 'carId', onDelete: 'CASCADE' });
Maintenance.belongsTo(Car, {foreignKey: 'carId'})

// userRole and permission relationship
userRole.belongsToMany(permission, { 
    through: AssignPermissionToRoles, 
    foreignKey: 'userRoleId',
    otherKey: 'permissionId' 
  });
  permission.belongsToMany(userRole, { 
    through: AssignPermissionToRoles, 
    foreignKey: 'permissionId',  
    otherKey: 'userRoleId'
  });
  
// user and userRole relationship
user.belongsToMany(userRole, {
    through: AssignRolesToUser,
    foreignKey: 'userId', 
    otherKey: 'userRoleId'
  });
  userRole.belongsToMany(user, {
    through: AssignRolesToUser,
    foreignKey: 'userRoleId',
    otherKey: 'userId'
  });
}

module.exports = setupRelationships;