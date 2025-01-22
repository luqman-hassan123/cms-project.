const { body, param, check, validationResult } = require('express-validator');

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateCarCreation = [
    body('carModel')
        .notEmpty().withMessage('Car model is required')
        .isString().withMessage('Car model must be a string'),
    body('carMake')
        .notEmpty().withMessage('Car make is required')
        .isString().withMessage('Car make must be a string'),
    body('carYear')
        .notEmpty().withMessage('Car year is required')
        .isInt({ min: 1886 }).withMessage('Car year must be a valid year'),
    body('carCondition')
        .notEmpty().withMessage('Car condition is required')
        .isString().withMessage('Car condition must be a string'),
    body('carStatus')
        .notEmpty().withMessage('Car status is required')
        .isString().withMessage('Car status must be a string'),
    body('carDescription')
        .optional()
        .isString().withMessage('Car description must be a string if provided'),
];
const validateCarUpdate = [
    body('carId')
        .isInt().withMessage('Car ID must be an integer'),
    body('carModel')
        .optional()
        .isString().withMessage('Car model must be a string'),
    body('carMake')
        .optional()
        .isString().withMessage('Car make must be a string'),
    body('carYear')
        .optional()
        .isInt({ min: 1886 }).withMessage('Car year must be a valid year'),
    body('carCondition')
        .optional()
        .isString().withMessage('Car condition must be a string'),
    body('carStatus')
        .optional()
        .isString().withMessage('Car status must be a string'),
    body('carDescription')
        .optional()
        .isString().withMessage('Car description must be a string if provided'),
];

const validateCarId = [
  check("carId")
    .trim()
    .isInt()
    .withMessage("Invalid car ID format")
    .notEmpty()
    .withMessage("car ID is required"),
  handleValidationErrors,
];



module.exports = {
    validateCarCreation,
    validateCarUpdate,
    validateCarId,
    handleValidationErrors,
};
