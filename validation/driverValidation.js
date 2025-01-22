const { check, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const nameValidation = [
  check("driverName")
    .isLength({ max: 100 })
    .withMessage("Driver name must be less than 100 characters"),
];
const licenseNumberValidation = [
  check("driverLicenseNumber")
    .isLength({ max: 50 })
    .withMessage("License number must be less than 50 characters"),
];
const validateCreateDriver = [
  check("driverName").notEmpty().withMessage("Driver name is required"),
  ...nameValidation,
  check("driverLicenseNumber")
    .notEmpty()
    .withMessage("License number is required"),
  ...licenseNumberValidation,
  handleValidationErrors,
];
const validateUpdateDriver = [
  check("driverName").optional(),
  ...nameValidation,
  check("driverLicenseNumber").optional(),
  ...licenseNumberValidation,
  handleValidationErrors,
];
const validateDriverId = [
  check("driverId")
    .trim()
    .isInt()
    .withMessage("Invalid Driver ID format")
    .notEmpty()
    .withMessage("Driver ID is required"),
  handleValidationErrors,
];

module.exports = {
  validateCreateDriver,
  validateUpdateDriver,
  validateDriverId,
};
