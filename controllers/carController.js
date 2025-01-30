const carService = require('../services/carService');

const createCarHandler = async (req, res) => {
    const carData = req.body; 
    try {
        const car = await carService.createCar(carData); 
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ message: 'Error in car creation: ' + error.message });
    }
};
const getCarsHandler = async (req, res) => {
    try {
        const cars = await carService.getCars();
        res.status(200).json(cars); 
    } catch (error) {
        res.status(500).json({ message: 'Error in retrieving cars: ' + error.message });
    }
};
const getCarByIdHandler = async (req, res) => {
    const carId = req.params.carId;
    try {
        const car = await carService.getCarById(carId);
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ message: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error in retrieving car by ID: ' + error.message });
    }
};
const updateCarHandler = async (req, res) => {
    const carId = req.params.carId;
    const carData = req.body;
    try {
        const updatedCar = await carService.updateCar(carId, carData);
        res.status(200).json(updatedCar); 
    } catch (error) {
        res.status(500).json({ message: 'Error in updating car: ' + error.message });
    }
};
const deleteCarHandler = async (req, res) => {
    const carId = req.params.carId;
    try {
        const response = await carService.deleteCar(carId);
        res.status(200).json(response); 
    } catch (error) {
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
