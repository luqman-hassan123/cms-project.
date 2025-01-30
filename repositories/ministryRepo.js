/*
Just all database queries and functions
all daatabase function must be in repo file and also custom queries  
then these queries will be call in the services file
//DB queries, network calls,IO (file reading or writing)
*/

const Ministry = require('../models/Ministry');
const { logInfo, logError } = require ('../config/logger')

const createMinistry = async (name, address, description) => {
    try {
        logInfo('Creating ministry', { filePath: 'repositories/ministryRepo', methodName: 'createMinistry' });
        const ministry = await Ministry.create({ name, address, description });
        logInfo('Ministry created successfully', { filePath: 'repositories/ministryRepo', methodName: 'createMinistry', ministry });
        return ministry;
    } catch (error) {
        logError('Error creating ministry', { filePath: 'repositories/ministryRepo', methodName: 'createMinistry', error: error.message });
        throw new Error('Error creating ministry: ' + error.message);
    }
};
const getMinistries = async () => {
    try {
        logInfo('Fetching all ministries', { filePath: 'repositories/ministryRepo', methodName: 'getMinistries' });
        const ministries = await Ministry.findAll();
        logInfo('Ministries fetched successfully', { filePath: 'repositories/ministryRepo', methodName: 'getMinistries', count: ministries.length });
        return ministries;
    } catch (error) {
        logError('Error fetching ministries', { filePath: 'repositories/ministryRepo', methodName: 'getMinistries', error: error.message });
        throw new Error('Error retrieving ministries: ' + error.message);
    }
};
const getMinistryById = async (ministry_id) => {
    try {
        logInfo('Fetching ministry by Id', { filePath: 'repositories/ministryRepo', methodName: 'getMinistryById' });
        const ministryById = await Ministry.findByPk(ministry_id);
        logInfo('Ministries fetched successfully', { filePath: 'repositories/ministryRepo', methodName: 'getMinistryById', });
        return ministryById;
    } catch (error) {
        logError('Error fetching ministry by Id', { filePath: 'repositories/ministryRepo', methodName: 'getMinistryById', error: error.message });
        throw new Error('Error retrieving ministry by ID: ' + error.message);
    }
};
const updateMinistry = async (ministry_id, { name, address, description }) => {
    try {
        logInfo('Updating ministry', { filePath: 'repositories/ministryRepo', methodName: 'updateMinistry', ministry_id });
        const ministry = await Ministry.findByPk(ministry_id);
        if (ministry) {
            ministry.name = name;
            ministry.address = address;
            ministry.description = description;
            await ministry.save();
            logInfo('Ministry updated successfully', { filePath: 'repositories/ministryRepo', methodName: 'updateMinistry', ministry });
            return ministry;
        } else {
            logError('Ministry not found', { filePath: 'repositories/ministryRepo', methodName: 'updateMinistry', ministry_id });
            throw new Error('Ministry not found');
        }
    } catch (error) {
        logError('Error updating ministry', { filePath: 'repositories/ministryRepo', methodName: 'updateMinistry', error: error.message });
        throw new Error('Error updating ministry: ' + error.message);
    }
};
const deleteMinistry = async (ministry_id) => {
    try {
        logInfo('Deleting ministry', { filePath: 'repositories/ministryRepo', methodName: 'deleteMinistry'});
        const ministry = await Ministry.findByPk(Number(ministry_id));
        if (ministry) {
            await ministry.destroy();
            logInfo('Deleted ministry successfully', { filePath: 'repositories/ministryRepo', methodName: 'deleteMinistry'});
            return { message: 'Ministry deleted successfully' };
        } else {
            logInfo(' ministry not found', { filePath: 'repositories/ministryRepo', methodName: 'deleteMinistry'});
            throw new Error('Ministry not found');
        }
    } catch (error) {
        logInfo('Error deleting ministry', { filePath: 'repositories/ministryRepo', methodName: 'deleteMinistry', error: error.message});
        throw new Error('Error deleting ministry: ' + error.message);
    }
};

module.exports = {
    createMinistry,
    getMinistries,
    getMinistryById,
    updateMinistry,
    deleteMinistry,
};
