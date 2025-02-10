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
router.delete('/:departmentId', validateDepartmentId ,deleteDepartment);
router.put('/:departmentId', validateDepartmentId ,validateUpdateDepartment ,updateDepartment);
router.get('/:departmentId', validateDepartmentId ,getDepartmentById);
router.get('/' ,getDepartments);

module.exports = router;

