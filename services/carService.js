const { logInfo } = require('../config/logger');
const carRepo = require('../repositories/carRepo');

const createCar = async (carData) => {
    try {
        logInfo('creating new car', {filePath: 'services/carService', methodName: 'createCar' , carData});
        const result = await carRepo.createCar(carData);
        logInfo('car created successfully', {filePath: 'services/departmentService', methodName: 'createCar', carId: result.carId})
        return result;
    } catch (error) {
        logError('Error creating car',{filePath: 'services/departmentService', methodName: 'createCar', error });
    }
};
const getCars = async () => {
    try {
        logInfo('Getting all cars', {filePath: 'services/carService', methodName: 'getCars'});
        const cars = await carRepo.getCars();
        logInfo(`Fetched ${cars.length} cars`, {filePath: 'services/carService', methodName: 'getCars'}); // Correct variable and spelling
        return cars; 
    } catch (error) {
        throw new Error('Error in retrieving cars service: ' + error.message);
    }
};
const getCarById = async (carId) => {
    try {
        logInfo('Fetching car by ID', { filePath: 'services/carService', methodName: 'getCarById', carId });
        const car = await carRepo.getCarById(carId);
        logInfo('Car fetched successfully', { filePath: 'services/carService', methodName: 'getCarById', car });
        return car;
    } catch (error) {
        logError('Error retrieving car by ID', { filePath: 'services/carService', methodName: 'getCarById', error });
        throw new Error('Error in retrieving car by ID service: ' + error.message);
    }
};
const updateCar = async (carId, carData) => {
    try {
        logInfo('Updating car', { filePath: 'services/carService', methodName: 'updateCar', carId, carData });
        const result = await carRepo.updateCar(carId, carData);
        logInfo('Car updated successfully', { filePath: 'services/carService', methodName: 'updateCar', carId });
        return result;
    } catch (error) {
        logError('Error updating car', { filePath: 'services/carService', methodName: 'updateCar', error });
        throw new Error('Error in updating car service: ' + error.message);
    }
};
const deleteCar = async (carId) => {
    try {
        logInfo('Deleting car', { filePath: 'services/carService', methodName: 'deleteCar', carId });
        const result = await carRepo.deleteCar(carId);
        logInfo('Car deleted successfully', { filePath: 'services/carService', methodName: 'deleteCar', carId });
        return result;
    } catch (error) {
        logError('Error deleting car', { filePath: 'services/carService', methodName: 'deleteCar', error });
        throw new Error('Error in deleting car service: ' + error.message);
    }
};

module.exports = {
    createCar,
    getCars,
    getCarById,
    updateCar,
    deleteCar,
};
