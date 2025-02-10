const { logInfo, logError } = require ('../config/logger');
const Car = require('../models/Relationships');
const  Driver = require ('../models/Relationships')
const Relationship =  require ('../models/Relationships')



const createCar = async (carData) => {
    try {
        logInfo("Creating a new car", { filePath: "repo.js", methodName: "createCar", carData });
        const car = await Car.create(carData);
        logInfo("Car created successfully", { filePath: "repo.js", methodName: "createCar", car });
        return car; 
    } catch (error) {
        logError("Error creating car", { filePath: "repo.js", methodName: "createCar", error: error.message });
        throw new Error('Error creating car in repository: ' + error.message);
    }
};
const getCars = async () => {
    try {
        logInfo("Fetching all cars", { filePath: "repo.js", methodName: "getCars" });
        const cars = await Car.findAll( {
            include: [
              {
                model: Department,
                as: "department",
                attributes: ["departmentId", "name", "description", "created_at", "updated_at"],
              },
            ],
          });
        logInfo("Fetched all cars successfully", { filePath: "repo.js", methodName: "getCars", count: cars.length });
        return cars;
    } catch (error) {
        logError("Error retrieving cars", { filePath: "repo.js", methodName: "getCars", error: error.message });
        throw new Error('Error retrieving cars from repository: ' + error.message);
    }
};
const getCarById = async (carId) => {
    try {
        logInfo("Fetching car by ID", { filePath: "repo.js", methodName: "getCarById", carId });
        const car = await Car.findByPk(carId,  {
            include: [
              {
                model: Department,
                as: "department",
                attributes: ["departmentId", "name", "description", "created_at", "updated_at"],
              },
            ],
          });
        logInfo("Fetched car successfully", { filePath: "repo.js", methodName: "getCarById", car });
        return car;
    } catch (error) {
        logError("Error retrieving car by ID", { filePath: "repo.js", methodName: "getCarById", error: error.message });
        throw new Error('Error retrieving car by ID from repository: ' + error.message);
    }
};
const updateCar = async (carId, carData) => {
    try {
        logInfo("Updating car", { filePath: "repo.js", methodName: "updateCar", carId, carData });
        const car = await Car.findByPk(carId);
        if (car) {
            await car.update(carData); 
            logInfo("Car updated successfully", { filePath: "repo.js", methodName: "updateCar", car });
            return car;
        } else {
            throw new Error('Car not found');
        }
    } catch (error) {
        logError("Error updating car", { filePath: "repo.js", methodName: "updateCar", error: error.message });
        throw new Error('Error updating car in repository: ' + error.message);
    }
};
const deleteCar = async (carId) => {
    try {
        logInfo("Deleting car", { filePath: "repo.js", methodName: "deleteCar", carId });
        const car = await Car.findByPk(carId);
        if (car) {
            await car.destroy();
            logInfo("Car deleted successfully", { filePath: "repo.js", methodName: "deleteCar", carId });
            return { message: 'Car deleted successfully' };
        } else {
            throw new Error('Car not found');
        }
    } catch (error) {
        logError("Error deleting car", { filePath: "repo.js", methodName: "deleteCar", error: error.message });
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
