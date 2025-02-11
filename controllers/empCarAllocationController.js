const empCarAllocationService = require('../services/empCarAllocationService');
const { logInfo, logError } = require('../config/logger') 

const createEmpCarAllocation = async (req, res) => {
    try {
        const empCarData = req.body;
        logInfo('creatinig new employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'createEmpCarAllocation'})
        const newEmpCarAllocation = await empCarAllocationService.createEmpCarAllocation(empCarData);
        logInfo('create successfully new employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'createEmpCarAllocation'})
        res.status(201).json({
            message: 'EmpCarAllocation created successfully',
            data: newEmpCarAllocation,
        });
    } catch (error) {
        logError('Error creating Employee carallocation', { filePath: 'controllers/empCarAllocationController', methodName: 'createEmpCarAllocation', error: error.message });
        res.status(500).json({
            message: 'Error in creating EmpCarAllocation',
            error: error.message,
        });
    }
};
const getEmpCarAllocations = async (req, res) => {
    try {
        logInfo('getting employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'getEmpCarAllocations'})
        const empCarAllocations = await empCarAllocationService.getEmpCarAllocations();
        logInfo('Get successfully employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'getEmpCarAllocations'})
        res.status(200).json({
            message: 'EmpCarAllocations retrieved successfully',
            data: empCarAllocations,
        });
    } catch (error) {
        logError('Error creating Employee carallocation', { filePath: 'controllers/empCarAllocationController', methodName: 'getEmpCarAllocations', error: error.message });
        res.status(500).json({
            message: 'Error in retrieving EmpCarAllocations',
            error: error.message,
        });
    }
};
const getEmpCarAllocationById = async (req, res) => {
    try {
        logInfo('getting employee car allocation by Id', {filePath: 'controllers/empCarAllocationController' , methodName: 'getEmpCarAllocationById'})
        const { empCarAllocationId } = req.params;
        const empCarAllocation = await empCarAllocationService.getEmpCarAllocationById(empCarAllocationId);
        if (empCarAllocation) {
            logInfo('Get successfully employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'getEmpCarAllocationById'})
            res.status(200).json({
                message: 'EmpCarAllocation retrieved successfully',
                data: empCarAllocation,
            });
        } else {
            res.status(404).json({
                message: 'EmpCarAllocation not found',
            });
        }
    } catch (error) {
        logError('Error creating Employee carallocation', { filePath: 'controllers/empCarAllocationController', methodName: 'getEmpCarAllocationById', error: error.message });
        res.status(500).json({
            message: 'Error in retrieving EmpCarAllocation by ID',
            error: error.message,
        });
    }
};
const updateEmpCarAllocation = async (req, res) => {
    try {
        logInfo('updating employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'updateEmpCarAllocation'})
        const { empCarAllocationId } = req.params;
        const empCarData = req.body;
        const updatedEmpCarAllocation = await empCarAllocationService.updateEmpCarAllocation(empCarAllocationId, empCarData);
        if (updatedEmpCarAllocation) {
            logInfo('Get successfully employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'updateEmpCarAllocation'})
            res.status(200).json({
                message: 'EmpCarAllocation updated successfully',
                data: updatedEmpCarAllocation,
            });
        } else {
            res.status(404).json({
                message: 'EmpCarAllocation not found',
            });
        }
    } catch (error) {
        logError('Error creating Employee carallocation', { filePath: 'controllers/empCarAllocationController', methodName: 'updateEmpCarAllocation', error: error.message });
        res.status(500).json({
            message: 'Error in updating EmpCarAllocation',
            error: error.message,
        });
    }
};
const deleteEmpCarAllocation = async (req, res) => {
    try {
        logInfo('deleting employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'deleteEmpCarAllocation'})
        const { empCarAllocationId } = req.params;
        const result = await empCarAllocationService.deleteEmpCarAllocation(empCarAllocationId);
        if (result) {
            logInfo('Get successfully employee car allocation', {filePath: 'controllers/empCarAllocationController' , methodName: 'deleteEmpCarAllocation'})
            res.status(200).json({
                message: 'EmpCarAllocation deleted successfully',
            });
        } else {
            res.status(404).json({
                message: 'EmpCarAllocation not found',
            });
        }
    } catch (error) {
        logError('Error creating Employee carallocation', { filePath: 'controllers/empCarAllocationController', methodName: 'deleteEmpCarAllocation', error: error.message });
        res.status(500).json({
            message: 'Error in deleting EmpCarAllocation',
            error: error.message,
        });
    }
};

module.exports = {
    createEmpCarAllocation,
    getEmpCarAllocations,
    getEmpCarAllocationById,
    updateEmpCarAllocation,
    deleteEmpCarAllocation,
};
