const { check, validationResult } = require("express-validator");

const validateDriverCarHistoryId = [
    check("driverCarHistoryId")
      .notEmpty().withMessage("DriverCarHistory ID is required")
      .isInt().withMessage("DriverCarHistory ID must be an integer"),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];

const validateCreateHistory = [
  check("driverId")
    .notEmpty().withMessage("Driver ID is required")
    .isInt().withMessage("Driver ID must be an integer"),
  check("carId")
    .notEmpty().withMessage("Car ID is required")
    .isInt().withMessage("Car ID must be an integer"),
  check("startDate")
    .notEmpty().withMessage("Start Date is required")
    .isISO8601().withMessage("Start Date must be a valid date in ISO 8601 format"),
  check("endDate")
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
  check("driverId")
    .optional()
    .isInt().withMessage("Driver ID must be an integer"),
  check("carId")
    .optional()
    .isInt().withMessage("Car ID must be an integer"),
  check("startDate")
    .optional()
    .isISO8601().withMessage("Start Date must be a valid date in ISO 8601 format"),
  check("endDate")
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

module.exports = {
  validateCreateHistory,
  validateUpdateHistory,
  validateDriverCarHistoryId,
};
