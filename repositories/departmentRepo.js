/*
Just all database queries and functions
all daatabase function must be in repo file and also custom queries 
*/
const Department = require("../models/Department");
const createDepartment = async (name, description, ministry_id) => {
  try {
    return await Department.create({ name, description, ministry_id });
  } catch (error) {
    throw new Error("Error creating department: " + error.message);
  }
};
const getAllDepartment = async () => {
  try {
    return await Department.findAll();
  } catch (error) {
    throw new Error("Error getting all departments: " + error.message);
  }
};
const getDepartmentById = async (dept_id) => {
  try {
    return await Department.findByPk(dept_id);
  } catch (error) {
    throw new Error("Error getting department by id: " + error.message);
  }
};
const updateDepartment = async (dep_id, { name, description, ministry_id }) => {
  try {
    const department = await Department.findByPk(dep_id);
    if (department) {
      department.name = name;
      department.description = description;
      department.ministry_id = ministry_id;
      await department.save();
      return department;
    } else {
      throw new Error("Department not found");
    }
  } catch (error) {
    throw new Error("Error updating department: " + error.message);
  }
};
const deleteDepartment = async (dep_id) => {
  try {
    const department = await Department.findByPk(dep_id);
    if (department) {
      await department.destroy();
      return { message: "Department deleted successfully" };
    } else {
      throw new Error("Department not found");
    }
  } catch (error) {
    throw new Error("Error deleting department: " + error.message);
  }
};

module.exports = {
  createDepartment,
  getAllDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};
