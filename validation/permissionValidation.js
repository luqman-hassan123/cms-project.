const { body, check, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
const validatePermissionCreation = [
  body('permissionName')
    .trim()
    .notEmpty().withMessage('Permission name is required')
    .isString().withMessage('Permission name must be a string')
    .isLength({ min: 3 }).withMessage('Permission name must be at least 3 characters long'),
  handleValidationErrors
];
const validatePermissionUpdate = [
  body('permissionId')
    .notEmpty().withMessage('Permission ID is required')
    .isInt().withMessage('Permission ID must be an integer'),
  body('permissionName')
    .optional()
    .isString().withMessage('Permission name must be a string')
    .isLength({ min: 3 }).withMessage('Permission name must be at least 3 characters long'),
  handleValidationErrors
];
const validatePermissionId = [
  check('permissionId')
    .trim()
    .notEmpty().withMessage('Permission ID is required')
    .isInt().withMessage('Permission ID must be an integer'),
  handleValidationErrors
];

module.exports = {
  validatePermissionCreation,
  validatePermissionUpdate,
  validatePermissionId,
  handleValidationErrors,
};
