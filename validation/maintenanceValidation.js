const { body, check, validationResult } = require("express-validator");

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
const validateMaintenanceCreation = [
    body("carId")
        .notEmpty().withMessage("Car ID is required")
        .isInt().withMessage("Car ID must be an integer"),
    body("maintenanceDate")
        .notEmpty().withMessage("Maintenance date is required")
        .isISO8601().withMessage("Maintenance date must be in ISO format (YYYY-MM-DD)"),
    body("maintenanceCost")
        .notEmpty().withMessage("Maintenance cost is required")
        .isFloat({ gt: 0 }).withMessage("Maintenance cost must be a positive number"),
    body("maintenanceDescription")
        .optional()
        .isString().withMessage("Maintenance description must be a string")
        .isLength({ min: 5, max: 500 }).withMessage("Description must be between 5 and 500 characters"),
    handleValidationErrors
];
const validateMaintenanceUpdate = [
    body("carId")
        .optional()
        .isInt().withMessage("Car ID must be an integer"),
    body("maintenanceDate")
        .optional()
        .isISO8601().withMessage("Maintenance date must be in ISO format (YYYY-MM-DD)"),
    body("maintenanceCost")
        .optional()
        .isFloat({ gt: 0 }).withMessage("Maintenance cost must be a positive number"),
    body("maintenanceDescription")
        .optional()
        .isString().withMessage("Maintenance description must be a string")
        .isLength({ min: 5, max: 500 }).withMessage("Description must be between 5 and 500 characters"),
    handleValidationErrors
];
const validateMaintenanceId = [
    check("maintenanceId")
        .trim()
        .isInt().withMessage("Invalid maintenance ID format")
        .notEmpty().withMessage("Maintenance ID is required"),
    handleValidationErrors
];

module.exports = {
    validateMaintenanceCreation,
    validateMaintenanceUpdate,
    validateMaintenanceId,
    handleValidationErrors,
};
