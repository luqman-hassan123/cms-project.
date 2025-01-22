/*
Just all database queries and functions
all daatabase function must be in repo file and also custom queries  
then these queries will be call in the services file
//DB queries, network calls,IO (file reading or writing)
*/

const Ministry = require('../models/Ministry');

const createMinistry = async (name, address, description) => {
    try {
        return await Ministry.create({ name, address , description});
    } catch (error) {
        throw new Error('Error creating ministry: ' + error.message);
    }
};
const getMinistries = async () => {
    try {
        return await Ministry.findAll();
    } catch (error) {
        throw new Error('Error retrieving ministries: ' + error.message);
    }
};
const getMinistryById = async (ministry_id) => {
    try {
        return await Ministry.findByPk(ministry_id);
    } catch (error) {
        throw new Error('Error retrieving ministry by ID: ' + error.message);
    }
};
const updateMinistry = async (ministry_id, { name, address, description }) => {
    try {
        const ministry = await Ministry.findByPk(ministry_id);
        if (ministry) {
            ministry.name = name;
            ministry.address = address;
            ministry.description = description;
            await ministry.save();
            return ministry;
        } else {
            throw new Error('Ministry not found');
        }
    } catch (error) {
        throw new Error('Error updating ministry: ' + error.message);
    }
};
const deleteMinistry = async (ministry_id) => {
    try {
        const ministry = await Ministry.findByPk(Number(ministry_id));
        if (ministry) {
            await ministry.destroy();
            return { message: 'Ministry deleted successfully' };
        } else {
            throw new Error('Ministry not found');
        }
    } catch (error) {
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
