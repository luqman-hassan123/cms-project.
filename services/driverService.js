const driverRepo = require('../repositories/driverRepo'); 

const createDriver = async (driverData) => {
    try {
        return await driverRepo.createDriver(driverData);
    } catch (error) {
        throw new Error('Error in driver creation service: ' + error.message);
    }
};
const getDrivers = async () => {
    try {
        return await driverRepo.getDrivers();
    } catch (error) {
        throw new Error('Error in retrieving drivers service: ' + error.message);
    }
};
const getDriverById = async (driverId) => {
    try {
        return await driverRepo.getDriverById(driverId);
    } catch (error) {
        throw new Error('Error in retrieving driver by ID service: ' + error.message);
    }
};
const updateDriver = async (driverId, driverData) => {
    try {
        return await driverRepo.updateDriver(driverId, driverData); 
    } catch (error) {
        throw new Error('Error in updating driver service: ' + error.message);
    }
};
const deleteDriver = async (driverId) => {
    try {
        return await driverRepo.deleteDriver(driverId);
    } catch (error) {
        throw new Error('Error in deleting driver service: ' + error.message);
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
