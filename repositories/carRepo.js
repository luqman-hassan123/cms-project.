const Car = require('../models/Car');

const createCar = async (carData) => {
    try {
        const car = await Car.create(carData); // Create the car record
        console.log("Car created successfully:", JSON.stringify(car, null, 2)); // Log the created car
        return car; // Return the created car
    } catch (error) {
        throw new Error('Error creating car in repository: ' + error.message);
    }
};

const getCars = async () => {
    try {
        return await Car.findAll();
    } catch (error) {
        throw new Error('Error retrieving cars from repository: ' + error.message);
    }
};
const getCarById = async (carId) => {
    try {
        return await Car.findByPk(carId);
    } catch (error) {
        throw new Error('Error retrieving car by ID from repository: ' + error.message);
    }
};const updateCar = async (carId, carData) => {
    try {
        const car = await Car.findByPk(carId);
        if (car) {
            await car.update(carData); 
            return car;
        } else {
            throw new Error('Car not found');
        }
    } catch (error) {
        throw new Error('Error updating car in repository: ' + error.message);
    }
};
const deleteCar = async (carId) => {
    try {
        const car = await Car.findByPk(carId);
        if (car) {
            await car.destroy();
            return { message: 'Car deleted successfully' };
        } else {
            throw new Error('Car not found');
        }
    } catch (error) {
        throw new Error('Error deleting car in repository: ' + error.message);
    }
};

module.exports = {
    createCar,
    getCars,
    getCarById,
    updateCar,
    deleteCar,
};
