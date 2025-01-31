/*
Just all database queries and functions
all daatabase function must be in repo file and also custom queries 
*/
const Department = require("../models/Department");
const { logInfo, logError } = require ('../config/logger')

const createDepartment = async (name, description, ministry_id) => {
  try {
    logInfo("Creating a new department", { filePath: "repo.js", methodName: "createDepartment", name, description, ministry_id });
    const department = await Department.create({ name, description, ministry_id });
    logInfo("Department created successfully", { filePath: "repo.js", methodName: "createDepartment", department });
    return department;
  } catch (error) {
    logError("Error creating department", { filePath: "repo.js", methodName: "createDepartment", error: error.message });
    throw new Error("Error creating department: " + error.message);
  }
};
const getAllDepartment = async () => {
  try {
    logInfo("Fetching all departments", { filePath: "repo.js", methodName: "getAllDepartment" });
    const departments = await Department.findAll();
    logInfo("Fetched all departments successfully", { filePath: "repo.js", methodName: "getAllDepartment", count: departments.length });
    return departments;
  } catch (error) {
    logError("Error getting all departments", { filePath: "repo.js", methodName: "getAllDepartment", error: error.message });
    throw new Error("Error getting all departments: " + error.message);
  }
};
const getDepartmentById = async (dept_id) => {
  try {
    logInfo("Fetching department by ID", { filePath: "repo.js", methodName: "getDepartmentById", dept_id });
    const department = await Department.findByPk(dept_id);
    logInfo("Fetched department successfully", { filePath: "repo.js", methodName: "getDepartmentById", department });
    return department;
  } catch (error) {
    logError("Error getting department by id", { filePath: "repo.js", methodName: "getDepartmentById", error: error.message });
    throw new Error("Error getting department by id: " + error.message);
  }
};
const updateDepartment = async (dep_id, { name, description, ministry_id }) => {
  try {
    logInfo("Updating department", { filePath: "repo.js", methodName: "updateDepartment", dep_id, name, description, ministry_id });
    const department = await Department.findByPk(dep_id);
    if (department) {
      department.name = name;
      department.description = description;
      department.ministry_id = ministry_id;
      await department.save();
      logInfo("Department updated successfully", { filePath: "repo.js", methodName: "updateDepartment", department });
      return department;
    } else {
      throw new Error("Department not found");
    }
  } catch (error) {
    logError("Error updating department", { filePath: "repo.js", methodName: "updateDepartment", error: error.message });
    throw new Error("Error updating department: " + error.message);
  }
};
const deleteDepartment = async (dep_id) => {
  try {
    logInfo("Deleting department", { filePath: "repo.js", methodName: "deleteDepartment", dep_id });
    const department = await Department.findByPk(dep_id);
    if (department) {
      await department.destroy();
      logInfo("Department deleted successfully", { filePath: "repo.js", methodName: "deleteDepartment", dep_id });
      return { message: "Department deleted successfully" };
    } else {
      throw new Error("Department not found");
    }
  } catch (error) {
    logError("Error deleting department", { filePath: "repo.js", methodName: "deleteDepartment", error: error.message });
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
