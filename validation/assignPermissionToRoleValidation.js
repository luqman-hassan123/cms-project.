const { body, param, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const validateAssignPermissionToRoleCreation = [
  body("userRoleId")
    .notEmpty().withMessage("User Role ID is required")
    .isInt({ min: 1 }).withMessage("User Role ID must be a positive integer"),
  body("permissionId")
    .notEmpty().withMessage("Permission ID is required")
    .isInt({ min: 1 }).withMessage("Permission ID must be a positive integer"),
  body("description")
    .optional()
    .isString().withMessage("Description must be a string")
    .isLength({ max: 255 }).withMessage("Description can't exceed 255 characters"),
  handleValidationErrors,
];
const validateAssignPermissionToRoleUpdate = [
  body("userRoleId")
    .optional()
    .isInt({ min: 1 }).withMessage("User Role ID must be a positive integer"),
  body("permissionId")
    .optional()
    .isInt({ min: 1 }).withMessage("Permission ID must be a positive integer"),
  body("description")
    .optional()
    .isString().withMessage("Description must be a string")
    .isLength({ max: 255 }).withMessage("Description can't exceed 255 characters"),
  handleValidationErrors,
];

const validateAssignPermissionToRoleId = [
  param("assignPermissionToRoleId")
    .notEmpty().withMessage("assignPermissionToRoleId is required")
    .isInt({ min: 1 }).withMessage("assignPermissionToRoleId must be a positive integer"),
  handleValidationErrors,
];

module.exports = {
  validateAssignPermissionToRoleCreation,
  validateAssignPermissionToRoleUpdate,
  validateAssignPermissionToRoleId,
  handleValidationErrors,
};
