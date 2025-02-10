const departmentService = require("../services/departmentService");
const ministryService = require("../services/ministryService");
const { logInfo, logError } = require ('../config/logger')

const createDepartment = async (req, res) => {
  try {
    logInfo("Creating a new department", { filePath: 'controllers/departmentController', methodName: "createDepartment", body: req.body });
    const { name, description, ministryId } = req.body;
    const department = await departmentService.createDepartmentService(
      name,
      description,
      ministryId,
    );
    logInfo("Department created successfully", { filePath: 'controllers/departmentController', methodName: "createDepartment", department });
    res.status(201).json(department);
  } catch (err) {
    logError("Error in create Department controller", { filePath: 'controllers/departmentController', methodName: "createDepartment", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const getDepartments = async (req, res) => {
  try {
    logInfo("Fetching all departments", { filePath: 'controllers/departmentController', methodName: "getDepartments" });
    const departments = await departmentService.getDepartmentsService();
    logInfo("Fetching all departments successfully", { filePath: 'controllers/departmentController', methodName: "getDepartments" });
    res.status(200).json(departments);
  } catch (err) {
    logError("Error in getDepartments controller", { filePath: 'controllers/departmentController', methodName: "getDepartments", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const getDepartmentById = async (req, res) => {
  try {
    const { departmentId } = req.params;
    logInfo("Fetching department by ID", { filePath: 'controllers/departmentController', methodName: "getDepartmentById", departmentId });
    const department = await departmentService.getDepartmentByIdService(departmentId);
    if (!department) {
      logInfo("department not found by ID", { filePath: 'controllers/departmentController', methodName: "getDepartmentById", departmentId });
      return res.status(404).json({ error: "Department not found" });
    }
    res.status(200).json(department);
  } catch (err) {
    logError("Error in getDepartmentById controller", { filePath: 'controllers/departmentController', methodName: "getDepartmentById", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const deleteDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    logInfo("Deleting department", { filePath: 'controllers/departmentController', methodName: "deleteDepartment", departmentId });
    const result = await departmentService.deleteDepartmentService(departmentId);
    if (result) {
      logInfo("Department deleted successfully", { filePath: 'controllers/departmentController', methodName: "deleteDepartment", departmentId });
      res.status(200).json({ message: "Department deleted successfully" });
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (err) {
    logError("Error in deleteDepartment controller", { filePath: 'controllers/departmentController', methodName: "deleteDepartment", error: err.message });
    res.status(500).json({ error: err.message });
  }
};
const updateDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const { name, description, ministryId } = req.body;
    logInfo("Updating department", { filePath: 'controllers/departmentController', methodName: "updateDepartment", departmentId, body: req.body });
    const updatedDepartment = await departmentService.updateDepartmentService(
      departmentId,
      { name, description, ministryId }
    );
    if (!updatedDepartment) {
      return res.status(404).json({ error: "Department not found" });
    }
    logInfo("Department updated successfully", { filePath: 'controllers/departmentController', methodName: "updateDepartment", updatedDepartment });
    res.status(200).json(updatedDepartment);
  } catch (err) {
    logError("Error in updateDepartment controller", { filePath: 'controllers/departmentController', methodName: "updateDepartment", error: err.message });
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartment,
  updateDepartment,
};
