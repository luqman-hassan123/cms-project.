const fuelService = require ('../services/fuelservice')
const { logInfo, logError } = require('../config/logger');

const createFuel = async (req, res) => {
  try {
    logInfo('Received request to create fuel entry', { filePath: 'controllers/fuelController', methodName: 'createFuel' });
    const fuel = await fuelService.createFuel(req.body);
    res.status(201).json({ message: 'Fuel entry created successfully', fuel });
  } catch (error) {
    logError('Error creating fuel entry', { filePath: 'controllers/fuelController', methodName: 'createFuel', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getFuels = async (req, res) => {
  try {
    logInfo('Received request to fetch all fuel entries', { filePath: 'controllers/fuelController', methodName: 'getFuels' });
    const fuels = await fuelService.getFuels();
    res.status(200).json(fuels);
  } catch (error) {
    logError('Error fetching fuel entries', { filePath: 'controllers/fuelController', methodName: 'getFuels', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const getFuelById = async (req, res) => {
  try {
    logInfo('Received request to fetch fuel entry by ID', { filePath: 'controllers/fuelController', methodName: 'getFuelById', fuelId: req.params.fuelId });
    const fuel = await fuelService.getFuelById(req.params.fuelId);
    res.status(200).json(fuel);
  } catch (error) {
    logError('Error fetching fuel entry by ID', { filePath: 'controllers/fuelController', methodName: 'getFuelById', error: error.message });
    res.status(404).json({ error: error.message });
  }
};
const updateFuel = async (req, res) => {
  try {
    logInfo('Received request to update fuel entry', { filePath: 'controllers/fuelController', methodName: 'updateFuel', fuelId: req.params.fuelId });
    const fuel = await fuelService.updateFuel(req.params.fuelId, req.body);
    res.status(200).json({ message: 'Fuel entry updated successfully', fuel });
  } catch (error) {
    logError('Error updating fuel entry', { filePath: 'controllers/fuelController', methodName: 'updateFuel', error: error.message });
    res.status(500).json({ error: error.message });
  }
};
const deleteFuel = async (req, res) => {
  try {
    logInfo('Received request to delete fuel entry', { filePath: 'controllers/fuelController', methodName: 'deleteFuel', fuelId: req.params.fuelId });
    await fuelService.deleteFuel(req.params.fuelId);
    res.status(200).json({ message: 'Fuel entry deleted successfully' });
  } catch (error) {
    logError('Error deleting fuel entry', { filePath: 'controllers/fuelController', methodName: 'deleteFuel', error: error.message });
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createFuel,
  getFuels,
  getFuelById,
  updateFuel,
  deleteFuel,
};
