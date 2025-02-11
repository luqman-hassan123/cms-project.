const { body, param, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateBudgetCreation = [
    body('departmentId')
        .notEmpty().withMessage('Department ID is required')
        .isInt().withMessage('Department ID must be an integer'),
    body('newCarBudget')
        .notEmpty().withMessage('New Car Budget is required')
        .isFloat({ min: 0 }).withMessage('New Car Budget must be a positive number'),
    body('maintenanceBudget')
        .notEmpty().withMessage('Maintenance Budget is required')
        .isFloat({ min: 0 }).withMessage('Maintenance Budget must be a positive number'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string')
        .isLength({ max: 255 }).withMessage('Description should not exceed 255 characters'),
    handleValidationErrors,
];
const validateBudgetUpdate = [
    body('departmentId')
        .optional()
        .isInt().withMessage('Department ID must be an integer'),
    body('newCarBudget')
        .optional()
        .isFloat({ min: 0 }).withMessage('New Car Budget must be a positive number'),
    body('maintenanceBudget')
        .optional()
        .isFloat({ min: 0 }).withMessage('Maintenance Budget must be a positive number'),
    body('description')
        .optional()
        .isString().withMessage('Description must be a string')
        .isLength({ max: 255 }).withMessage('Description should not exceed 255 characters'),
    handleValidationErrors,
];
const validateBudgetId = [
    param('budgetId')
        .trim()
        .isInt().withMessage('Invalid budget ID format')
        .notEmpty().withMessage('Budget ID is required'),
    handleValidationErrors,
];

module.exports = {
    validateBudgetCreation,
    validateBudgetUpdate,
    validateBudgetId,
    handleValidationErrors,
};
