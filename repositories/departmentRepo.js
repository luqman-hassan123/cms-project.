/*
Just all database queries and functions
all daatabase function must be in repo file and also custom queries 
*/
const Department = require ('../models/Department')
const Ministry = require ('../models/Ministry')
const { logInfo, logError } = require ('../config/logger')

const createDepartment = async (name, description, ministryId) => {
  try {
    logInfo("Creating a new department", { filePath: "repo.js", methodName: "createDepartment", name, description, ministryId });
    const department = await Department.create({ name, description, ministryId });
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
    const departments = await Department.findAll({
      include: [Ministry],
    });
    logInfo("Fetched all departments successfully", { filePath: "repo.js", methodName: "getAllDepartment", count: departments.length });
    return departments;
  } catch (error) {
    logError("Error getting all departments", { filePath: "repo.js", methodName: "getAllDepartment", error: error.message });
    throw new Error("Error getting all departments: " + error.message);
  }
};
const getDepartmentById = async (departmentId) => {
  try {
    logInfo("Fetching department by ID", { filePath: "repo.js", methodName: "getDepartmentById", departmentId });
    const department = await Department.findByPk(departmentId, {
      include: [Ministry],
    });
    logInfo("Fetched department successfully", { filePath: "repo.js", methodName: "getDepartmentById", department });
    return department;
  } catch (error) {
    logError("Error getting department by id", { filePath: "repo.js", methodName: "getDepartmentById", error: error.message });
    throw new Error("Error getting department by id: " + error.message);
  }
};
const updateDepartment = async (departmentId, { name, description, ministryId }) => {
  try {
    logInfo("Updating department", { filePath: "repo.js", methodName: "updateDepartment", departmentId, name, description, ministryId });
    const department = await Department.findByPk(departmentId);
    if (department) {
      department.name = name;
      department.description = description;
      department.ministryId = ministryId;
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
const deleteDepartment = async (departmentId) => {
  try {
    logInfo("Deleting department", { filePath: "repo.js", methodName: "deleteDepartment", departmentId });
    const department = await Department.findByPk(departmentId);
    if (department) {
      await department.destroy();
      logInfo("Department deleted successfully", { filePath: "repo.js", methodName: "deleteDepartment", departmentId });
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
