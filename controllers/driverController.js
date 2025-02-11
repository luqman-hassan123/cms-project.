const driverService = require('../services/driverService');
const { logInfo, logError } = require('../config/logger');

const createDriver = async (req, res) => {
    try {
        const driverData = req.body;
        logInfo('Creating driver', { filePath: 'controllers/driverController', methodName: 'createDriver', driverData });
        const newDriver = await driverService.createDriver(driverData);
        logInfo('Driver created successfully', { filePath: 'controllers/driverController', methodName: 'createDriver', newDriver });
        res.status(201).json({ message: 'Driver created successfully', data: newDriver });
    } catch (error) {
        logError('Error in creating driver', { filePath: 'controllers/driverController', methodName: 'createDriver', error: error.message });
        res.status(500).json({ message: 'Error in creating driver', error: error.message });
    }
};
const getDrivers = async (req, res) => {
    try {
        logInfo('Fetching all drivers', { filePath: 'controllers/driverController', methodName: 'getDrivers' });
        const drivers = await driverService.getDrivers();
        logInfo('Drivers retrieved successfully', { filePath: 'controllers/driverController', methodName: 'getDrivers', count: drivers.length });
        res.status(200).json({ message: 'Drivers retrieved successfully', data: drivers });
    } catch (error) {
        logError('Error in retrieving drivers', { filePath: 'controllers/driverController', methodName: 'getDrivers', error: error.message });
        res.status(500).json({ message: 'Error in retrieving drivers', error: error.message });
    }
};
const getDriverById = async (req, res) => {
    try {
        const { driverId } = req.params;
        logInfo('Fetching driver by ID', { filePath: 'controllers/driverController', methodName: 'getDriverById', driverId });
        const driver = await driverService.getDriverById(driverId);
        if (driver) {
            logInfo('Driver retrieved successfully', { filePath: 'controllers/driverController', methodName: 'getDriverById', driver });
            res.status(200).json({ message: 'Driver retrieved successfully', data: driver });
        } else {
            logInfo('Driver not found', { filePath: 'controllers/driverController', methodName: 'getDriverById', driverId });
            res.status(404).json({ message: 'Driver not found' });
        }
    } catch (error) {
        logError('Error in retrieving driver by ID', { filePath: 'controllers/driverController', methodName: 'getDriverById', error: error.message });
        res.status(500).json({ message: 'Error in retrieving driver by ID', error: error.message });
    }
};
const updateDriver = async (req, res) => {
    try {
        const { driverId } = req.params;
        const driverData = req.body;
        logInfo('Updating driver', { filePath: 'controllers/driverController', methodName: 'updateDriver', driverId, driverData });
        const updatedDriver = await driverService.updateDriver(driverId, driverData);
        if (updatedDriver) {
            logInfo('Driver updated successfully', { filePath: 'controllers/driverController', methodName: 'updateDriver', updatedDriver });
            res.status(200).json({ message: 'Driver updated successfully', data: updatedDriver });
        } else {
            logInfo('Driver not found', { filePath: 'controllers/driverController', methodName: 'updateDriver', driverId });
            res.status(404).json({ message: 'Driver not found' });
        }
    } catch (error) {
        logError('Error in updating driver', { filePath: 'controllers/driverController', methodName: 'updateDriver', error: error.message });
        res.status(500).json({ message: 'Error in updating driver', error: error.message });
    }
};
const deleteDriver = async (req, res) => {
    try {
        const { driverId } = req.params;
        logInfo('Deleting driver', { filePath: 'controllers/driverController', methodName: 'deleteDriver', driverId });
        const result = await driverService.deleteDriver(driverId);
        if (result) {
            logInfo('Driver deleted successfully', { filePath: 'controllers/driverController', methodName: 'deleteDriver', driverId });
            res.status(200).json({ message: 'Driver deleted successfully' });
        } else {
            logInfo('Driver not found', { filePath: 'controllers/driverController', methodName: 'deleteDriver', driverId });
            res.status(404).json({ message: 'Driver not found' });
        }
    } catch (error) {
        logError('Error in deleting driver', { filePath: 'controllers/driverController', methodName: 'deleteDriver', error: error.message });
        res.status(500).json({ message: 'Error in deleting driver', error: error.message });
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
