const { check, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const validateEmployeeId = [
  check("employeeId")
    .isInt({ min: 1 }) 
    .withMessage("Employee ID must be a positive integer")
    .notEmpty()
    .withMessage("Employee ID is required"),
  handleValidationErrors,
];
const validateCreateEmployee = [
  check("employeeName")
    .isString()
    .withMessage("Employee name must be a string")
    .notEmpty()
    .withMessage("Employee name is required"),
  check("departmentId")
    .isInt({ min: 1 }) 
    .withMessage("Department ID must be a positive integer")
    .notEmpty()
    .withMessage("Department ID is required"),
  handleValidationErrors,
];
const validateUpdateEmployee = [
  check("employeeName")
    .isString()
    .withMessage("Employee name must be a string")
    .notEmpty()
    .withMessage("Employee name is required"),
  check("departmentId")
    .isInt({ min: 1 }) 
    .withMessage("Department ID must be a positive integer")
    .notEmpty()
    .withMessage("Department ID is required"),
  handleValidationErrors,
];

module.exports = {
  validateCreateEmployee,
  validateEmployeeId,
  validateUpdateEmployee,
};
