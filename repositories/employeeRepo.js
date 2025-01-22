const Employee = require("../models/Employee");

const createEmployee = async (dep_id, emp_name, rank, description) => {
  console.log();
  try {
    return await Employee.create({ dep_id, emp_name, rank, description });
  } catch (error) {
    console.error("Error creating employee:", error);
    throw new Error("Error creating employee: " + error.message);
  }
};
const getEmployeeById = async (emp_id) => {
  try {
    return await Employee.findByPk(emp_id);
  } catch (error) {
    throw new Error("Error getting employee by id: " + error.message);
  }
};
const getAllEmployee = async () => {
  try {
    return await Employee.findAll();
  } catch (error) {
    throw new Error("Error getting all employees: " + error.message);
  }
};
const updateEmployee = async ( emp_id, { dep_id, emp_name, rank, description }) => {
  try {
    const employee = await Employee.findByPk(emp_id);
    if (employee) {
      employee.dep_id = dep_id;
      employee.emp_name = emp_name;
      employee.rank = rank;
      employee.description = description;
      return await employee.save();
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
    throw new Error("Error updating employee: " + error.message);
  }
};
const deleteEmployee = async (emp_id) => {
  try {
    const employee = await Employee.findByPk(emp_id);
    if (employee) {
      await employee.destroy();
      return { message: "Employee deleted successfully." };
    } else {
      throw new Error("Employee not found");
    }
  } catch (error) {
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
