const express = require('express');
const { createDriver, getDrivers, getDriverById, updateDriver, deleteDriver} = require('../controllers/driverController'); 
const {validateCreateDriver, validateDriverId, validateUpdateDriver} = require ('../validation/driverValidation');
const router = express.Router();

router.post('/', validateCreateDriver  ,createDriver);
router.get('/', getDrivers);
router.get('/drivers/:id', validateDriverId ,getDriverById);
router.put('/drivers/:id', validateUpdateDriver ,updateDriver);
router.delete('/drivers/:id', validateDriverId , deleteDriver);

module.exports = router;
