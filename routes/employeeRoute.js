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
router.delete('/:employeeId', validateEmployeeId, deleteEmployee);
router.put('/:employeeId', validateUpdateEmployee, updateEmployee); 
router.get('/:employeeId', validateEmployeeId, getEmployeeById); 
router.get('/', getAllEmployee ); 

module.exports = router;
