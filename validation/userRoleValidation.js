const { body, param, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateRoleCreation = [
    body('roleName')
        .notEmpty().withMessage('Role name is required')
        .isString().withMessage('Role name must be a string')
        .isLength({ min: 3 }).withMessage('Role name must be at least 3 characters long'),
    handleValidationErrors,
];
const validateRoleUpdate = [
    body('roleName')
        .optional()
        .isString().withMessage('Role name must be a string')
        .isLength({ min: 3 }).withMessage('Role name must be at least 3 characters long'),
    handleValidationErrors,
];
const validateUserRoleId = [
    param('userRoleId')
        .trim()
        .isInt().withMessage('Invalid userRoleId format')
        .notEmpty().withMessage('userRoleId is required'),
    handleValidationErrors,
];

module.exports = {
    validateRoleCreation,
    validateRoleUpdate,
    validateUserRoleId,
    handleValidationErrors,
};
