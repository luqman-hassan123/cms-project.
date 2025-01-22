const carRepo = require('../repositories/carRepo');

const createCar = async (carData) => {
    try {
        return await carRepo.createCar(carData);
    } catch (error) {
        throw new Error('Error in car creation service: ' + error.message);
    }
};
const getCars = async () => {
    try {
        return await carRepo.getCars();
    } catch (error) {
        throw new Error('Error in retrieving cars service: ' + error.message);
    }
};
const getCarById = async (carId) => {
    try {
        return await carRepo.getCarById(carId);
    } catch (error) {
        throw new Error('Error in retrieving car by ID service: ' + error.message);
    }
};
const updateCar = async (carId, carData) => {
    try {
        return await carRepo.updateCar(carId, carData); 
    } catch (error) {
        throw new Error('Error in updating car service: ' + error.message);
    }
};
const deleteCar = async (carId) => {
    try {
        return await carRepo.deleteCar(carId);
    } catch (error) {
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
