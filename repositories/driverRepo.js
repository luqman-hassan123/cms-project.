const Driver = require('../models/Driver');


const createDriver = async (driverData) => {
    try {
        const driver = await Driver.create(driverData);
        console.log("Driver created successfully:", JSON.stringify(driver, null, 2));
        return driver;
    } catch (error) {
        throw new Error('Error creating driver in repository: ' + error.message);
    }
};
const getDrivers = async () => {
    try {
        const drivers = await Driver.findAll();
        console.log("Drivers retrieved:", drivers); 
    } catch (error) {
        throw new Error('Error retrieving drivers from repository: ' + error.message);
    }
};
const getDriverById = async (driverId) => {
    try {
        const driver = await Driver.findByPk(driverId); 
        return driver;
    } catch (error) {
        throw new Error('Error in retrieving driver by ID: ' + error.message);
    }
};
const updateDriver = async (driverId, driverData) => {
    try {
        const driver = await Driver.findByPk(driverId);
        if (driver) {
            await driver.update(driverData); 
            return driver;
        } else {
            return null; 
        }
    } catch (error) {
        throw new Error('Error in updating driver: ' + error.message);
    }
};
const deleteDriver = async (driverId) => {
    try {
        const driver = await Driver.findByPk(driverId);
        if (driver) {
            await driver.destroy(); 
            return true;
        } else {
            return false; 
        }
    } catch (error) {
        throw new Error('Error in deleting driver: ' + error.message);
    }
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    updateDriver,
    deleteDriver,
};
