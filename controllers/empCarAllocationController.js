const empCarAllocationService = require('../services/empCarAllocationService');

const createEmpCarAllocation = async (req, res) => {
    try {
        const empCarData = req.body;
        const newEmpCarAllocation = await empCarAllocationService.createEmpCarAllocation(empCarData);
        console.log(newEmpCarAllocation);  
        res.status(201).json({
            message: 'EmpCarAllocation created successfully',
            data: newEmpCarAllocation,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error in creating EmpCarAllocation',
            error: error.message,
        });
    }
};
const getEmpCarAllocations = async (req, res) => {
    try {
        const empCarAllocations = await empCarAllocationService.getEmpCarAllocations();
        res.status(200).json({
            message: 'EmpCarAllocations retrieved successfully',
            data: empCarAllocations,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error in retrieving EmpCarAllocations',
            error: error.message,
        });
    }
};
const getEmpCarAllocationById = async (req, res) => {
    try {
        const { empCarAlloId } = req.params;
        const empCarAllocation = await empCarAllocationService.getEmpCarAllocationById(empCarAlloId);
        if (empCarAllocation) {
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
        res.status(500).json({
            message: 'Error in retrieving EmpCarAllocation by ID',
            error: error.message,
        });
    }
};
const updateEmpCarAllocation = async (req, res) => {
    try {
        const { empCarAlloId } = req.params;
        const empCarData = req.body;
        const updatedEmpCarAllocation = await empCarAllocationService.updateEmpCarAllocation(empCarAlloId, empCarData);
        if (updatedEmpCarAllocation) {
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
        res.status(500).json({
            message: 'Error in updating EmpCarAllocation',
            error: error.message,
        });
    }
};
const deleteEmpCarAllocation = async (req, res) => {
    try {
        const { empCarAlloId } = req.params;
        const result = await empCarAllocationService.deleteEmpCarAllocation(empCarAlloId);
        if (result) {
            res.status(200).json({
                message: 'EmpCarAllocation deleted successfully',
            });
        } else {
            res.status(404).json({
                message: 'EmpCarAllocation not found',
            });
        }
    } catch (error) {
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
