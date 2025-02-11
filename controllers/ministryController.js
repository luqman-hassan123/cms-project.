/*
Never ever call repositories or db queries or functions here 
Just services functions here
just a few lines of code are enough, all the business logic should
be there in the service
*/
const ministryService = require('../services/ministryService');
const { logInfo, logError } = require('../config/logger') 

const createMinistry = async (req, res) => {
    try {
        const { name, address, description } = req.body;
        logInfo('Creating ministry', { filePath: 'controllers/ministryController', methodName: 'createMinistry', name, address, description });
        const ministry = await ministryService.createMinistryService(name, address, description);
        logInfo('Ministry created successfully', { filePath: 'controllers/ministryController', methodName: 'createMinistry', ministry });
        res.status(201).json(ministry);
    } catch (err) {
        logError('Error creating ministry', { filePath: 'controllers/ministryController', methodName: 'createMinistry', error: err.message });
        res.status(500).json({ error: err.message });
    }
};
const getMinistries = async (req, res) => {
    try {
        logInfo('Fetching all ministries', { filePath: 'controllers/ministryController', methodName: 'getMinistries' });
        const ministries = await ministryService.getMinistriesService();
        logInfo('Ministries fetched successfully', { filePath: 'controllers/ministryController', methodName: 'getMinistries', count: ministries.length });
        res.status(200).json(ministries);
    } catch (err) {
        logError('Error fetching ministries', { filePath: 'controllers/ministryController', methodName: 'getMinistries', error: err.message });
        res.status(500).json({ error: err.message });
    }
};
const getMinistryById = async (req, res) => {
    try {
        logInfo('Fetching ministry by Id', { filePath: 'controllers/ministryController', methodName: 'getMinistryById' });
        const { ministryId } = req.params;
        const ministry = await ministryService.getMinistryByIdService(ministryId);
        logInfo('Fetching ministry by Id successfully', { filePath: 'controllers/ministryController', methodName: 'getMinistryById' });
        if (!ministry) {
            logInfo('ministry by Id not found', { filePath: 'controllers/ministryController', methodName: 'getMinistryById' });
            return res.status(404).json({ error: "Ministry not found" });
        }
        res.status(200).json(ministry); 
    } catch (err) {
        res.status(500).json({ error: err.message });
        logInfo('Error Fetching ministry by Id', { filePath: 'controllers/ministryController', methodName: 'getMinistryById', error: err.message });
    }
};
const updateMinistry = async (req, res) => {
    try {
        const { ministryId } = req.params;
        const { name, address, description } = req.body;
        logInfo('Updating ministry', { filePath: 'controllers/ministryController', methodName: 'updateMinistry', ministryId, name, address, description });
        const updatedMinistry = await ministryService.updateMinistryService(ministryId, { name, address, description });
        if (!updatedMinistry) {
            logInfo('Ministry not found', { filePath: 'controllers/ministryController', methodName: 'updateMinistry', ministryId });
            return res.status(404).json({ error: "Ministry not found" });
        }
        logInfo('Ministry updated successfully', { filePath: 'controllers/ministryController', methodName: 'updateMinistry', updatedMinistry });
        res.status(200).json(updatedMinistry);
    } catch (err) {
        logError('Error updating ministry', { filePath: 'controllers/ministryController', methodName: 'updateMinistry', error: err.message });
        res.status(500).json({ error: err.message });
    }
};
const deleteMinistry = async (req, res) => {
    try {
        const { ministryId } = req.params;
        logInfo('Deleting ministry', { filePath: 'controllers/ministryController', methodName: 'deleteMinistry', ministryId });

        const result = await ministryService.deleteMinistryService(ministryId);
        if (result) {
            logInfo('Ministry deleted successfully', { filePath: 'controllers/ministryController', methodName: 'deleteMinistry', ministryId });
            res.status(200).json({ message: "Ministry deleted successfully" });
        } else {
            logInfo('Ministry not found', { filePath: 'controllers/ministryController', methodName: 'deleteMinistry', ministryId });
            res.status(404).json({ error: "Ministry not found" });
        }
    } catch (err) {
        logError('Error deleting ministry', { filePath: 'controllers/ministryController', methodName: 'deleteMinistry', error: err.message });
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createMinistry,
    getMinistries,
    getMinistryById,
    updateMinistry,
    deleteMinistry,
};
