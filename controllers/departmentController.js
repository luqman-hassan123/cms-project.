const departmentService = require("../services/departmentService");
const createDepartment = async (req, res) => {
  try {
    const { name, description, ministry_id } = req.body;
    const department = await departmentService.createDepartmentService(
      name,
      description,
      ministry_id
    );
    res.status(201).json(department);
  } catch (err) {
    console.error("Error in createDepartment controller:", err);
    res.status(500).json({ error: err.message });
  }
};
const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getDepartmentsService();
    res.status(200).json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getDepartmentById = async (req, res) => {
  try {
    const { dep_id } = req.params;
    const department = await departmentService.getDepartmentByIdService(dep_id);
    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }
    res.status(200).json(department);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteDepartment = async (req, res) => {
  try {
    const { dep_id } = req.params;
    const result = await departmentService.deleteDepartmentService(dep_id);
    if (result) {
      res.status(200).json({ message: "Department deleted successfully" });
    } else {
      res.status(404).json({ error: "Department not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateDepartment = async (req, res) => {
  try {
    const { dep_id } = req.params;
    const { name, description, ministry_id } = req.body;
    const updatedDepartment = await departmentService.updateDepartmentService(
      dep_id,
      { name, description, ministry_id }
    );
    if (!updatedDepartment) {
      return res.status(404).json({ error: "Department not found" });
    }
    res.status(200).json(updatedDepartment);
  } catch (err) {
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
