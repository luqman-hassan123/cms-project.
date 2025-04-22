const { body, param, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const validateAssignRoleToUserCreation = [
  body("userId")
    .notEmpty().withMessage("User ID is required")
    .isInt({ min: 1 }).withMessage("User ID must be a positive integer"),
  body("userRoleId")
    .notEmpty().withMessage("User Role ID is required")
    .isInt({ min: 1 }).withMessage("User Role ID must be a positive integer"),
  body("description")
    .optional()
    .isString().withMessage("Description must be a string")
    .isLength({ max: 255 }).withMessage("Description can't exceed 255 characters"),
  handleValidationErrors,
];
const validateAssignRoleToUserUpdate = [
  body("userId")
    .optional()
    .isInt({ min: 1 }).withMessage("User ID must be a positive integer"),
  body("userRoleId")
    .optional()
    .isInt({ min: 1 }).withMessage("User Role ID must be a positive integer"),
  body("description")
    .optional()
    .isString().withMessage("Description must be a string")
    .isLength({ max: 255 }).withMessage("Description can't exceed 255 characters"),
  handleValidationErrors,
];
const validateAssignRoleToUserId = [
  param("id")
    .notEmpty().withMessage("ID is required")
    .isInt({ min: 1 }).withMessage("ID must be a positive integer"),
  handleValidationErrors,
];

module.exports = {
  validateAssignRoleToUserCreation,
  validateAssignRoleToUserUpdate,
  validateAssignRoleToUserId,
  handleValidationErrors,
};
