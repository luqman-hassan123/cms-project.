/*
Never ever call repositories or db queries or functions here 
Just services functions here
just a few lines of code are enough, all the business logic should
be there in the service
*/

const ministryService = require('../services/ministryService');
const createMinistry = async (req, res) => {
    try {
        const { name, address, description } = req.body;
        const ministry = await ministryService.createMinistryService(name, address , description);
        res.status(201).json(ministry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getMinistries = async (req, res) => {
    try {
        const ministries = await ministryService.getMinistriesService();
        res.status(200).json(ministries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const getMinistryById = async (req, res) => {
    try {
        const { ministry_id } = req.params;
        const ministry = await ministryService.getMinistryByIdService(ministry_id);
        if (!ministry) {
            return res.status(404).json({ error: "Ministry not found" });
        }
        res.status(200).json(ministry); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const updateMinistry = async (req, res) => {
    try {
        const { ministry_id } = req.params;
        const { name, address, description } = req.body;
        const updatedMinistry = await ministryService.updateMinistryService(ministry_id, { name, address, description });
        if (!updatedMinistry) {
            return res.status(404).json({ error: "Ministry not found" });
        }
        res.status(200).json(updatedMinistry);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const deleteMinistry = async (req, res) => {
    try {
        const { ministry_id } = req.params;
        const result = await ministryService.deleteMinistryService(ministry_id);
        if (result) {
            res.status(200).json({ message: "Ministry deleted successfully" });
        } else {
            res.status(404).json({ error: "Ministry not found" });
        }
    } catch (err) {
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
