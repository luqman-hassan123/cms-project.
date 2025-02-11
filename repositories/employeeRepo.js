const { logInfo, logError } = require("../config/logger");
const Employee = require ('../models/Employee')
const Department = require ('../models/Department')

const createEmployee = async (departmentId, employeeName, rank, description) => {
  try {
    logInfo("Creating a new employee", { filePath: "employeeRepo.js", methodName: "createEmployee", departmentId, employeeName, rank, description });
    const employee = await Employee.create({ departmentId, employeeName, rank, description });
    logInfo("Employee created successfully", { filePath: "employeeRepo.js", methodName: "createEmployee", employee });
    return employee;
  } catch (error) {
    logError("Error creating employee", { filePath: "employeeRepo.js", methodName: "createEmployee", error: error.message });
    throw new Error("Error creating employee: " + error.message);
  }
};
const getEmployeeById = async (employeeId) => {
  try {
    logInfo("Fetching employee by ID", { filePath: "employeeRepo.js", methodName: "getEmployeeById", employeeId });
    const employee = await Employee.findByPk(employeeId, {
      include: [
       Department
      ],
    });
    logInfo("Fetched employee successfully", { filePath: "employeeRepo.js", methodName: "getEmployeeById", employee });
    return employee;
  } catch (error) {
    logError("Error getting employee by ID", { filePath: "employeeRepo.js", methodName: "getEmployeeById", error: error.message });
    throw new Error("Error getting employee by ID: " + error.message);
  }
};
const getAllEmployee = async () => {
  try {
    logInfo("Fetching all employees", { filePath: "employeeRepo.js", methodName: "getAllEmployee" });
    const employees = await Employee.findAll({
      include: [
       Department
      ],
    });
    logInfo("Fetched all employees successfully", { filePath: "employeeRepo.js", methodName: "getAllEmployee", count: employees.length });
    return employees;
  } catch (error) {
    logError("Error getting all employees", { filePath: "employeeRepo.js", methodName: "getAllEmployee", error: error.message });
    throw new Error("Error getting all employees: " + error.message);
  }
};
const updateEmployee = async (employeeId, { departmentId, employeeName, rank, description }) => {
  try {
    logInfo("Updating employee", { filePath: "employeeRepo.js", methodName: "updateEmployee", employeeId, departmentId, employeeName, rank, description });
    const employee = await Employee.findByPk(employeeId);
    if (employee) {
      employee.departmentId = departmentId;
      employee.employeeName = employeeName;
      employee.rank = rank;
      employee.description = description;
      await employee.save();
      logInfo("Employee updated successfully", { filePath: "employeeRepo.js", methodName: "updateEmployee", employee });
      return employee;
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
    logError("Error updating employee", { filePath: "employeeRepo.js", methodName: "updateEmployee", error: error.message });
    throw new Error("Error updating employee: " + error.message);
  }
};
const deleteEmployee = async (employeeId) => {
  try {
    logInfo("Deleting employee", { filePath: "employeeRepo.js", methodName: "deleteEmployee", employeeId });
    const employee = await Employee.findByPk(employeeId);
    if (employee) {
      await employee.destroy();
      logInfo("Employee deleted successfully", { filePath: "employeeRepo.js", methodName: "deleteEmployee", employeeId });
      return { message: "Employee deleted successfully" };
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
    logError("Error deleting employee", { filePath: "employeeRepo.js", methodName: "deleteEmployee", error: error.message });
    throw new Error("Error deleting employee: " + error.message);
  }
};

module.exports = {
  createEmployee,
  getEmployeeById,
  getAllEmployee,
  updateEmployee,
  deleteEmployee,
};
