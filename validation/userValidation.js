const { body, param, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateUserCreation = [
    body('userName')
        .notEmpty().withMessage('Name is required')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('userPassword')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 3 }).withMessage('Password must be at least 6 characters long'),
    handleValidationErrors,
];
const validateUserUpdate = [
    body('userName')
        .optional()
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('userPassword')
        .optional()
        .isLength().withMessage('Enter Password'),
    handleValidationErrors,
];
const validateUserId = [
    param('userId')
        .trim()
        .isInt().withMessage('Invalid user ID format')
        .notEmpty().withMessage('User ID is required'),
    handleValidationErrors,
];

module.exports = {
    validateUserCreation,
    validateUserUpdate,
    validateUserId,
    handleValidationErrors,
};
