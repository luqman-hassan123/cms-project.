const { check, validationResult } = require("express-validator");

const validateCreateHistory = [
  check("carId")
    .notEmpty().withMessage("Car ID is required")
    .isInt().withMessage("Car ID must be an integer"),
  check("emp_id")
    .notEmpty().withMessage("Employee ID is required")
    .isInt().withMessage("Employee ID must be an integer"),
  check("startDate")
    .notEmpty().withMessage("Start Date is required")
    .isISO8601().withMessage("Start Date must be a valid date in ISO 8601 format"),  check("endDate")
    .optional()
    .isISO8601().withMessage("End Date must be a valid date in ISO 8601 format, if provided"),
  check("description")
    .optional()
    .isLength({ max: 200 }).withMessage("Description must be less than 200 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
const validateUpdateHistory = [
  check("carId")
    .optional()
    .isInt().withMessage("Car ID must be an integer"),
  check("emp_id")
    .optional()
    .isInt().withMessage("Employee ID must be an integer"),
  check("startDate")
    .optional()
    .isDate().withMessage("Start Date must be a valid date"),
  check("endDate")
    .optional()
    .isDate().withMessage("End Date must be a valid date, if provided"),
  check("description")
    .optional()
    .isLength({ max: 200 }).withMessage("Description must be less than 200 characters"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
const validateCarEmployeeHistoryId = [
  check("carEmployeeHistoryId")
    .notEmpty().withMessage("CarEmployeeHistory ID is required")
    .isInt().withMessage("CarEmployeeHistory ID must be an integer"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = {
  validateCreateHistory,
  validateUpdateHistory,
  validateCarEmployeeHistoryId,
};
