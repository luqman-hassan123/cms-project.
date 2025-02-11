const { validationResult } = require("express-validator");
const employeeService = require("../services/employeeService");
const { logInfo, logError } = require("../config/logger");

const createEmployee = async (req, res) => {
  try {
    logInfo("Creating new employee", { filePath: "controllers/employeeController", methodName: "createEmployee" });
    const { departmentId, employeeName, rank, description } = req.body;
    const employee = await employeeService.createEmployee(
      departmentId,
      employeeName,
      rank,
      description
    );
    logInfo("Employee created successfully", { filePath: "controllers/employeeController", methodName: "createEmployee" });
    res.status(201).json(employee);
  } catch (err) {
    logError("Error creating employee", { filePath: "controllers/employeeController", methodName: "createEmployee", error: err.message });
    res.status(500).json({ message: err.message });
  }
};
const getAllEmployee = async (req, res) => {
  try {
    logInfo("Fetching all employees", { filePath: "controllers/employeeController", methodName: "getAllEmployee" });
    const employee = await employeeService.getAllEmployee();
    logInfo("Successfully fetched all employees", { filePath: "controllers/employeeController", methodName: "getAllEmployee" });
    res.status(200).json(employee);
  } catch (err) {
    logError("Error fetching employees", { filePath: "controllers/employeeController", methodName: "getAllEmployee", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    logInfo("Fetching employee by ID", { filePath: "controllers/employeeController", methodName: "getEmployeeById" });
    const { employeeId } = req.params;
    const employee = await employeeService.getEmployeeById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    logInfo("Successfully fetched employee", { filePath: "controllers/employeeController", methodName: "getEmployeeById" });
    res.status(200).json(employee);
  } catch (err) {
    logError("Error fetching employee by ID", { filePath: "controllers/employeeController", methodName: "getEmployeeById", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const updateEmployee = async (req, res) => {
  try {
    logInfo("Updating employee", { filePath: "controllers/employeeController", methodName: "updateEmployee" });
    const { employeeId } = req.params;
    const { employeeName, rank, description, departmentId } = req.body;
    const updateEmployee = await employeeService.updateEmployee(employeeId, {
      employeeName,
      rank,
      description,
      departmentId,
    });
    if (!updateEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    logInfo("Employee updated successfully", { filePath: "controllers/employeeController", methodName: "updateEmployee" });
    res.status(200).json(updateEmployee);
  } catch (err) {
    logError("Error updating employee", { filePath: "controllers/employeeController", methodName: "updateEmployee", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    logInfo("Deleting employee", { filePath: "controllers/employeeController", methodName: "deleteEmployee" });
    const { employeeId } = req.params;
    const result = await employeeService.deleteEmployee(employeeId);
    if (result) {
      logInfo("Employee deleted successfully", { filePath: "controllers/employeeController", methodName: "deleteEmployee" });
      res.status(200).json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
    logError("Error deleting employee", { filePath: "controllers/employeeController", methodName: "deleteEmployee", error: err.message });
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
