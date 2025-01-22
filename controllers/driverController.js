const driverService = require('../services/driverService'); 

const createDriver = async (req, res) => {
    try {
        const driverData = req.body;
        const newDriver = await driverService.createDriver(driverData);
        console.log(newDriver);  // Log to check the response structure
        res.status(201).json({
            message: 'Driver created successfully',
            data: newDriver,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error in creating driver',
            error: error.message,
        });
    }
};
const getDrivers = async (req, res) => {
    try {
        const drivers = await driverService.getDrivers();
        res.status(200).json({
            message: 'Drivers retrieved successfullyyyy',
            data: drivers,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error in retrieving drivers',
            error: error.message,
        });
    }
};
const getDriverById = async (req, res) => {
    try {
        const { id } = req.params;
        const driver = await driverService.getDriverById(id);
        if (driver) {
            res.status(200).json({
                message: 'Driver retrieved successfully',
                data: driver,
            });
        } else {
            res.status(404).json({
                message: 'Driver not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error in retrieving driver by ID',
            error: error.message,
        });
    }
};
const updateDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const driverData = req.body;
        const updatedDriver = await driverService.updateDriver(id, driverData);
        if (updatedDriver) {
            res.status(200).json({
                message: 'Driver updated successfully',
                data: updatedDriver,
            });
        } else {
            res.status(404).json({
                message: 'Driver not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error in updating driver',
            error: error.message,
        });
    }
};
const deleteDriver = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await driverService.deleteDriver(id);
        if (result) {
            res.status(200).json({
                message: 'Driver deleted successfully',
            });
        } else {
            res.status(404).json({
                message: 'Driver not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error in deleting driver',
            error: error.message,
        });
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
