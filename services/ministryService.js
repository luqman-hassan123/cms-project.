// Example service (optional layer)
/*
in this file call only the function which define in the repository file 
call to repositores functions and expose it to just controller

*/
const ministryRepo = require('../repositories/ministryRepo');
const { logInfo, logError } = require('../config/logger'); 

const createMinistryService = async (name, address, description) => {
    try {
        logInfo('Creating a new ministry', { filePath: 'services/ministryService.js', methodName: 'createMinistryService', name, address });
        const result = await ministryRepo.createMinistry(name, address, description);
        logInfo('Ministry created successfully', { filePath: 'services/ministryService.js', methodName: 'createMinistryService', ministry_id: result.ministry_id });
        return result;
    } catch (error) {
        logError('Error creating ministry in service', { filePath: 'services/ministryService.js', methodName: 'createMinistryService', error });
        throw error; 
    }
};
const getMinistriesService = async () => {
    try {
        logInfo('Fetching all ministries', { filePath: 'services/ministryService.js', methodName: 'getMinistriesService' });
        const ministries = await ministryRepo.getMinistries();
        logInfo(`Fetched ${ministries.length} ministries`, { filePath: 'services/ministryService.js', methodName: 'getMinistriesService' });
        return ministries;
    } catch (error) {
        logError('Error fetching ministries', { filePath: 'services/ministryService.js', methodName: 'getMinistriesService', error });
        throw error;
    }
};
const getMinistryByIdService = async (ministry_id) => {
    try {
        logInfo('Fetching ministry by ID service', { filePath: 'services/ministryService.js', methodName: 'getMinistryByIdService', ministry_id });
        const ministry = await ministryRepo.getMinistryById(ministry_id);
        if (!ministry) {
            logInfo('Ministry not found', { filePath: 'services/ministryService.js', methodName: 'getMinistryByIdService', ministry_id });
        }
        return ministry;
    } catch (error) {
        logError('Error fetching ministry by ID', { filePath: 'services/ministryService.js', methodName: 'getMinistryByIdService', error });
        throw error;
    }
};
const updateMinistryService = async (ministry_id, name, address, description) => {
  try {
    logInfo('Updating ministry', { filePath: 'services/ministryService.js', methodName: 'updateMinistryService', ministry_id, name });
    const updatedMinistry = await ministryRepo.updateMinistry(ministry_id, name, address, description);
    logInfo('Ministry updated successfully', { filePath: 'services/ministryService.js', methodName: 'updateMinistryService', ministry_id });
    return updatedMinistry;
} catch (error) {
    logError('Error updating ministry', { filePath: 'services/ministryService.js', methodName: 'updateMinistryService', error });
    throw error;
}
};
const deleteMinistryService = async (ministry_id) => {
    try {
        logInfo('Deleting ministry', { filePath: 'services/ministryService.js', methodName: 'deleteMinistryService', ministry_id });
        const deleted = await ministryRepo.deleteMinistry(ministry_id);
        logInfo('Ministry deleted successfully', { filePath: 'services/ministryService.js', methodName: 'deleteMinistryService', ministry_id });
        return deleted;
    } catch (error) {
        logError('Error deleting ministry', { filePath: 'services/ministryService.js', methodName: 'deleteMinistryService', error });
        throw error;
    }
};

module.exports = {
    createMinistryService,
    getMinistriesService,
    getMinistryByIdService,
    updateMinistryService,
    deleteMinistryService,
};
