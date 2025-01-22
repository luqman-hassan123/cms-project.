const { check, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const nameValidation = [
  check("name")
    .isLength({ max: 100 })
    .withMessage("Ministry name must be less than 100 characters"),
];
const addressValidation = [
  check("address")
    .isLength({ max: 200 })
    .withMessage("Address must be less than 200 characters"),
];
const validateCreateMinistry = [
  check("name").notEmpty().withMessage("Ministry name is required"),
  ...nameValidation,
  check("address").notEmpty().withMessage("Address is required"),
  ...addressValidation,
  handleValidationErrors,
];
const validateUpdateMinistry = [
  check("name").optional(),
  ...nameValidation,
  check("address").optional(),
  ...addressValidation,
  handleValidationErrors,
];
const validateMinistryId = [
  check("ministry_id")
    .trim()
    .isInt()
    .withMessage("Invalid Ministry ID format")
    .notEmpty()
    .withMessage("Ministry ID is required"),
  handleValidationErrors,
];

module.exports = {
  validateCreateMinistry,
  validateUpdateMinistry,
  validateMinistryId,
};
