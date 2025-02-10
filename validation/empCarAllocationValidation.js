const { check, validationResult } = require('express-validator');

const validateCreateEmpCarAllocation = [
    check('employeeId')
        .notEmpty().withMessage('Employee ID is required')
        .isInt().withMessage('Employee ID must be an integer'),
    check('carId')
        .notEmpty().withMessage('Car ID is required')
        .isInt().withMessage('Car ID must be an integer'),
    check('description')
        .isLength({ max: 200 }).withMessage('Description must be less than 200 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const validateUpdateEmpCarAllocation = [
    check('employeeId')
        .optional()
        .isInt().withMessage('Employee ID must be an integer'),
    check('carId')
        .optional()
        .isInt().withMessage('Car ID must be an integer'),
    check('description')
        .optional()
        .isLength({ max: 200 }).withMessage('Description must be less than 200 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
const validateEmpCarAllocationId = [
    check('empCarAllocationId')
        .trim()
        .isInt().withMessage('Invalid EmpCarAllocation ID format')
        .notEmpty().withMessage('EmpCarAllocation ID is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateCreateEmpCarAllocation,
    validateUpdateEmpCarAllocation,
    validateEmpCarAllocationId
};
