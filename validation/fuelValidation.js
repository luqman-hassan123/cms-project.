const { body, check, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateFuelCreation = [
    body('fuelType')
        .notEmpty().withMessage('Fuel type is required')
        .isString().withMessage('Fuel type must be a string')
        .isIn(['Petrol', 'Diesel', 'Electric', 'Hybrid']).withMessage('Fuel type must be one of Petrol, Diesel, Electric, or Hybrid'),

    body('fuelPrice')
        .notEmpty().withMessage('Price is required')
        .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),

    body('fuelQuantity')
        .notEmpty().withMessage('Quantity is required')
        .isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    body('date')
        .notEmpty().withMessage('Date is required')
        .isISO8601().withMessage('Date must be in ISO format (YYYY-MM-DD)'),

    handleValidationErrors
];
const validateFuelUpdate = [
    body('fuelId')
        .isInt().withMessage('Fuel ID must be an integer'),
    body('fuelType')
        .optional()
        .isString().withMessage('Fuel type must be a string')
        .isIn(['Petrol', 'Diesel', 'Electric', 'Hybrid']).withMessage('Fuel type must be one of Petrol, Diesel, Electric, or Hybrid'),
    body('fuelPrice')
        .optional()
        .isFloat({ gt: 0 }).withMessage('Price must be a positive number'),
    body('fuelQuantity')
        .optional()
        .isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    body('date')
        .optional()
        .isISO8601().withMessage('Date must be in ISO format (YYYY-MM-DD)'),
    handleValidationErrors
];
const validateFuelId = [
    check("fuelId")
        .trim()
        .isInt().withMessage("Invalid fuel ID format")
        .notEmpty().withMessage("Fuel ID is required"),
    handleValidationErrors,
];

module.exports = {
    validateFuelCreation,
    validateFuelUpdate,
    validateFuelId,
    handleValidationErrors,
};
