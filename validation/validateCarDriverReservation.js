const { body, param, validationResult } = require('express-validator');

const validateCarDriverReservation = [
  body('carId')
    .isInt({ min: 1 })
    .withMessage('Car ID is required and should be a positive integer'),
  body('driverId')
    .isInt({ min: 1 })
    .withMessage('Driver ID is required and should be a positive integer'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description should be a string'),
];
const validateCarDriverReservationUpdate = [
  param('carDriverReservationId')
    .isInt({ min: 1 })
    .withMessage('Reservation ID should be a valid integer'),
  body('carId')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Car ID should be a positive integer'),
  body('driverId')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Driver ID should be a positive integer'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description should be a string'),
];
const validateCarDriverReservationId = [
  param('carDriverReservationId')
    .isInt({ min: 1 })
    .withMessage('Reservation ID should be a valid integer'),
];
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: errors.array(),
    });
  }
  next();
};

module.exports = {
  validateCarDriverReservation,
  validateCarDriverReservationUpdate,
  validateCarDriverReservationId,
  handleValidationErrors,
};
