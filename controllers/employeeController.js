const { validationResult } = require("express-validator");
const employeeService = require("../services/employeeService");

const createEmployee = async (req, res) => {
  try {
    const { departmentId, employeeName, rank, description } = req.body;
    const employee = await employeeService.createEmployee(
      departmentId,
      employeeName,
      rank,
      description
    );
    res.status(201).json(employee);
  } catch (err) {
    console.error("Error in create employee controller");
    res.status(500).json({ message: err.message });
  }
};
const getAllEmployee = async (req, res) => {
  try {
    const employee = await employeeService.getAllEmployee();
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await employeeService.getEmployeeById(employeeId);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateEmployee = async (req, res) => {
  try {
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
    res.status(200).json(updateEmployee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const result =  await employeeService.deleteEmployee(employeeId);
    if (result) {
      res.status(200).json({ message: "Employee deleted successfully" });
    } else {
      res.status(404).json({ message: "Employee not found" });
    }
  } catch (err) {
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
