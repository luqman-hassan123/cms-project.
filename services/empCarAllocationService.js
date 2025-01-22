const empCarAllocationRepo = require('../repositories/empCarAllocationRepo');

const createEmpCarAllocation = async (empCarAllocationData) => {
    try {
        const newEmpCarAllocation = await empCarAllocationRepo.createEmpCarAllocation(empCarAllocationData);
        return newEmpCarAllocation;
    } catch (error) {
        throw new Error('Service Error - Creating empCarAllocation: ' + error.message);
    }
};

const getEmpCarAllocations = async () => {
    try {
        const empCarAllocations = await empCarAllocationRepo.getEmpCarAllocations();
        return empCarAllocations;
    } catch (error) {
        throw new Error('Service Error - Retrieving empCarAllocations: ' + error.message);
    }
};

const getEmpCarAllocationById = async (empCarAlloId) => {
    try {
        const empCarAllocation = await empCarAllocationRepo.getEmpCarAllocationById(empCarAlloId);
        if (!empCarAllocation) {
            throw new Error('EmpCarAllocation not found');
        }
        return empCarAllocation;
    } catch (error) {
        throw new Error('Service Error - Retrieving empCarAllocation by ID: ' + error.message);
    }
};

const updateEmpCarAllocation = async (empCarAlloId, empCarAllocationData) => {
    try {
        const updatedEmpCarAllocation = await empCarAllocationRepo.updateEmpCarAllocation(empCarAlloId, empCarAllocationData);
        if (!updatedEmpCarAllocation) {
            throw new Error('EmpCarAllocation not found');
        }
        return updatedEmpCarAllocation;
    } catch (error) {
        throw new Error('Service Error - Updating empCarAllocation: ' + error.message);
    }
};

const deleteEmpCarAllocation = async (empCarAlloId) => {
    try {
        const deleted = await empCarAllocationRepo.deleteEmpCarAllocation(empCarAlloId);
        if (!deleted) {
            throw new Error('EmpCarAllocation not found');
        }
        return { message: 'EmpCarAllocation deleted successfully' };
    } catch (error) {
        throw new Error('Service Error - Deleting empCarAllocation: ' + error.message);
    }
};

module.exports = {
    createEmpCarAllocation,
    getEmpCarAllocations,
    getEmpCarAllocationById,
    updateEmpCarAllocation,
    deleteEmpCarAllocation,
};
