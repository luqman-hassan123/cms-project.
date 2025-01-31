const express = require('express');
const router = express.Router();
const {
  createDepartment,
  deleteDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
} = require('../controllers/departmentController');
const {
  validateCreateDepartment,
  validateUpdateDepartment,
  validateDepartmentId,
} = require ('../validation/departmentValidation')

router.post('/', validateCreateDepartment, createDepartment);
router.delete('/:dep_id', validateDepartmentId ,deleteDepartment);
router.put('/:dep_id', validateDepartmentId ,validateUpdateDepartment ,updateDepartment);
router.get('/:dep_id', validateDepartmentId ,getDepartmentById);
router.get('/' ,getDepartments);

module.exports = router;

