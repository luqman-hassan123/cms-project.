const carService = require('../services/carService');
const { logInfo, logError } = require('../config/logger');

const createCarHandler = async (req, res) => {
    const carData = req.body;
    try {
        logInfo("Creating a new car", { filePath: 'controllers/carController', methodName: "createCarHandler", body: carData });
        const car = await carService.createCar(carData);
        logInfo("Car created successfully", { filePath: 'controllers/carController', methodName: "createCarHandler", car });
        res.status(201).json(car);
    } catch (error) {
        logError("Error in car creation", { filePath: 'controllers/carController', methodName: "createCarHandler", error: error.message });
        res.status(500).json({ message: 'Error in car creation: ' + error.message });
    }
};
const getCarsHandler = async (req, res) => {
    try {
        logInfo("Fetching all cars", { filePath: 'controllers/carController', methodName: "getCarsHandler" });
        const cars = await carService.getCars();
        logInfo("Fetched all cars successfully", { filePath: 'controllers/carController', methodName: "getCarsHandler" });
        res.status(200).json(cars);
    } catch (error) {
        logError("Error in retrieving cars", { filePath: 'controllers/carController', methodName: "getCarsHandler", error: error.message });
        res.status(500).json({ message: 'Error in retrieving cars: ' + error.message });
    }
};
const getCarByIdHandler = async (req, res) => {
    const carId = req.params.carId;
    try {
        logInfo("Fetching car by ID", { filePath: 'controllers/carController', methodName: "getCarByIdHandler", carId });
        const car = await carService.getCarById(carId);
        if (car) {
            res.status(200).json(car);
        } else {
            logInfo("Car not found", { filePath: 'controllers/carController', methodName: "getCarByIdHandler", carId });
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        logError("Error in retrieving car by ID", { filePath: 'controllers/carController', methodName: "getCarByIdHandler", error: error.message });
        res.status(500).json({ message: 'Error in retrieving car by ID: ' + error.message });
    }
};
const updateCarHandler = async (req, res) => {
    const carId = req.params.carId;
    const carData = req.body;
    try {
        logInfo("Updating car", { filePath: 'controllers/carController', methodName: "updateCarHandler", carId, body: carData });
        const updatedCar = await carService.updateCar(carId, carData);
        logInfo("Car updated successfully", { filePath: 'controllers/carController', methodName: "updateCarHandler", updatedCar });
        res.status(200).json(updatedCar);
    } catch (error) {
        logError("Error in updating car", { filePath: 'controllers/carController', methodName: "updateCarHandler", error: error.message });
        res.status(500).json({ message: 'Error in updating car: ' + error.message });
    }
};
const deleteCarHandler = async (req, res) => {
    const carId = req.params.carId;
    try {
        logInfo("Deleting car", { filePath: 'controllers/carController', methodName: "deleteCarHandler", carId });
        const response = await carService.deleteCar(carId);
        logInfo("Car deleted successfully", { filePath: 'controllers/carController', methodName: "deleteCarHandler", carId });
        res.status(200).json(response);
    } catch (error) {
        logError("Error in deleting car", { filePath: 'controllers/carController', methodName: "deleteCarHandler", error: error.message });
        res.status(500).json({ message: 'Error in deleting car: ' + error.message });
    }
};

module.exports = {
    createCarHandler,
    getCarsHandler,
    getCarByIdHandler,
    updateCarHandler,
    deleteCarHandler,
};
