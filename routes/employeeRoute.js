const express = require('express');
const router = express.Router();

const {
  createEmployee,
  deleteEmployee,
  getAllEmployee,
  getEmployeeById,
  updateEmployee,
} = require('../controllers/employeeController');

const {
  validateCreateEmployee,
  validateUpdateEmployee,
  validateEmployeeId,
} = require('../validation/employeeValidation');

router.post('/', validateCreateEmployee, createEmployee);
router.delete('/:emp_id', validateEmployeeId, deleteEmployee);
router.put('/:emp_id', validateUpdateEmployee, updateEmployee); 
router.get('/:emp_id', validateEmployeeId, getEmployeeById); 
router.get('/', getAllEmployee ); 

module.exports = router;
