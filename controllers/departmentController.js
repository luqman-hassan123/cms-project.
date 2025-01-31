const departmentService = require("../services/departmentService");
const { logInfo, logError } = require ('../config/logger')

const createDepartment = async (req, res) => {
  try {
    logInfo("Creating a new department", { filePath: 'controllers/departmentController', methodName: "createDepartment", body: req.body });
    const { name, description, ministry_id } = req.body;
    const department = await departmentService.createDepartmentService(
      name,
      description,
      ministry_id
    );
    logInfo("Department created successfully", { filePath: 'controllers/departmentController', methodName: "createDepartment", department });
    res.status(201).json(department);
  } catch (err) {
    logError("Error in createDepartment controller", { filePath: 'controllers/departmentController', methodName: "createDepartment", error: err.message });
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
    const { dep_id } = req.params;
    logInfo("Fetching department by ID", { filePath: 'controllers/departmentController', methodName: "getDepartmentById", dep_id });
    const department = await departmentService.getDepartmentByIdService(dep_id);
    if (!department) {
      logInfo("department not found by ID", { filePath: 'controllers/departmentController', methodName: "getDepartmentById", dep_id });

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
    const { dep_id } = req.params;
    logInfo("Deleting department", { filePath: 'controllers/departmentController', methodName: "deleteDepartment", dep_id });
    const result = await departmentService.deleteDepartmentService(dep_id);
    if (result) {
      logInfo("Department deleted successfully", { filePath: 'controllers/departmentController', methodName: "deleteDepartment", dep_id });
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
    const { dep_id } = req.params;
    const { name, description, ministry_id } = req.body;
    logInfo("Updating department", { filePath: 'controllers/departmentController', methodName: "updateDepartment", dep_id, body: req.body });
    const updatedDepartment = await departmentService.updateDepartmentService(
      dep_id,
      { name, description, ministry_id }
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
