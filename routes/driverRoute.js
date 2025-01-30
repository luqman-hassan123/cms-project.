const express = require('express');
const { createDriver, getDrivers, getDriverById, updateDriver, deleteDriver} = require('../controllers/driverController'); 
const {validateCreateDriver, validateDriverId, validateUpdateDriver} = require ('../validation/driverValidation');
const router = express.Router();

router.post('/', validateCreateDriver  ,createDriver);
router.get('/', getDrivers);
router.get('/:driverId', validateDriverId ,getDriverById);
router.put('/:driverId', validateUpdateDriver ,updateDriver);
router.delete('/:driverId', validateDriverId , deleteDriver);

module.exports = router;
