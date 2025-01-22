const EmployeeCarAllocation = require('../models/employeeCarAllocation'); 

const createEmpCarAllocation = async (empCarAllocationData) => {
    try {
        const newEmpCarAllocation = await EmployeeCarAllocation.create(empCarAllocationData);
        return newEmpCarAllocation;
    } catch (error) {
        console.error('Error in creating empCarAllocation:', error);
        throw new Error('Error in creating empCarAllocation: ' + error.message);
    }
};
const getEmpCarAllocations = async () => {
    try {
        const empCarAllocations = await EmployeeCarAllocation.findAll(); 
        return empCarAllocations; 
    } catch (error) {
        throw new Error('Error in retrieving empCarAllocations: ' + error.message);
    }
};
const getEmpCarAllocationById = async (empCarAlloId) => {
    try {
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId); 
        return empCarAllocation;
    } catch (error) {
        throw new Error('Error in retrieving empCarAllocation by ID: ' + error.message);
    }
};
const updateEmpCarAllocation = async (empCarAlloId, empCarAllocationData) => {
    try {
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId);
        if (empCarAllocation) {
            await empCarAllocation.update(empCarAllocationData); 
            return empCarAllocation;
        } else {
            return null; 
        }
    } catch (error) {
        throw new Error('Error in updating empCarAllocation: ' + error.message);
    }
};
const deleteEmpCarAllocation = async (empCarAlloId) => {
    try {
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId);
        if (empCarAllocation) {
            await empCarAllocation.destroy(); 
            return true;
        } else {
            return false; 
        }
    } catch (error) {
        throw new Error('Error in deleting empCarAllocation: ' + error.message);
    }
};

module.exports = {
    createEmpCarAllocation,
    getEmpCarAllocations,
    getEmpCarAllocationById,
    updateEmpCarAllocation,
    deleteEmpCarAllocation,
};
