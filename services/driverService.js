const { logInfo, logError } = require('../config/logger');
const driverRepo = require('../repositories/driverRepo'); 

const createDriver = async (driverData) => {
    try {
        logInfo('creating new driver ', {filePath: 'services/driverService', methodName: 'createDriver', driverData})
        const result = await driverRepo.createDriver(driverData);
        logInfo('driver created successfully', {filePath: 'services/driverService',  methodName: 'createDriver', driverId: result.driverId})
        return result;
    } catch (error) {
        logError('Error creating driver',{ilePath: 'services/driverService', methodName: 'createDriver', error });
        throw error;
    }
};
const getDrivers = async () => {
    try {
        logInfo('getting all drivers', {filePath: 'services/driverService', methodName: 'getDrivers'});
        const result = await driverRepo.getDrivers();
        logInfo('driver fetched successfully', {filePath: 'services/driverService', methodName: 'getDrivers'})
        return result;
    } catch (error) {
        logError('Error getting all drivers',{ilePath: 'services/driverService', methodName: 'getDrivers', error });
        throw error;
    }
};
const getDriverById = async (driverId) => {
    try {
        logInfo('Get driver by ID', {filePath: 'services/driverService', methodName: 'getDriverById', driverId});
        const driver = await driverRepo.getDriverById(driverId);
        logInfo('driver fetched successfully', {filePath: 'services/driverService', methodName: 'getDriverById', driver});
        return driver;
    } catch (error) {
        logError('Error getting driver by ID', {filePath: 'services/driverService', methodName:'getDriverById', error});
        throw error;
    }
};
const updateDriver = async (driverId, driverData) => {
    try {
        logInfo('updating driver', {filePath: 'services/driverService', methodName: 'updateDriver', driverId, driverData} )
        const result = await driverRepo.updateDriver(driverId, driverData);
        logInfo('driver updated successfully', {filePath: 'services/driverService', methodName: 'updateDriver', driverId});
        return result;
    } catch (error) {
        logError('Error updating driver' ,{filePath: 'services/driverService', methodName: 'updateDriver', error})
        throw error;
    }
};
const deleteDriver = async (driverId) => {
    try {
        logInfo('deleting driver', {filePath: 'services/driverService', methodName: 'deleteDriver', driverId});
        const result = await driverRepo.deleteDriver(driverId);
        logInfo('driver deleted successfully', {filePath: 'services/driverService', methodName: 'deleteDriver', driverId});
        return result;
    } catch (error) {
        logError('Error deleting driver',{filePath: 'services/driverService', methodName: 'deleteDriver', error});
        throw error;
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
