const EmployeeCarAllocation = require('../models/employeeCarAllocation'); 
const { logInfo, logError } = require ('../config/logger') 
const Car = require('../models/Car'); 
const Employee = require('../models/Employee');

const createEmpCarAllocation = async (empCarAllocationData) => {
    try {
        logInfo('Creating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'createEmpCarAllocation',
            empCarAllocationData,
        });
        const newEmpCarAllocation = await EmployeeCarAllocation.create(empCarAllocationData);
        logInfo('Employee car allocation created successfully', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'createEmpCarAllocation',
            empCarAllocationId: newEmpCarAllocation.id,
        });
        return newEmpCarAllocation;
    } catch (error) {
        logError('Error in creating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'createEmpCarAllocation',
            error,
        });
        throw new Error('Error in creating empCarAllocation: ' + error.message);
    }
};
const getEmpCarAllocations = async () => {
    try {
        logInfo('Retrieving all employee car allocations', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocations',
        });
        const empCarAllocations = await EmployeeCarAllocation.findAll({
            include: [
               Car, Employee
            ]
        }); 
        logInfo('Employee car allocations retrieved successfully', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocations',
            count: empCarAllocations.length,
        });
        return empCarAllocations; 
    } catch (error) {
        logError('Error in retrieving employee car allocations', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocations',
            error,
        });
        throw new Error('Error in retrieving empCarAllocations: ' + error.message);
    }
};
const getEmpCarAllocationById = async (empCarAllocationId) => {
    try {
        logInfo('Retrieving employee car allocation by ID', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocationById',
            empCarAllocationId,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAllocationId, {
            include: [
               Car, Employee
            ]
        });
        if (empCarAllocation) {
            logInfo('Employee car allocation by id retrieved successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'getEmpCarAllocationById',
                empCarAllocationId,
            });
        } else {
            logInfo('Employee car allocation by id not found', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'getEmpCarAllocationById',
                empCarAllocationId,
            });
        }
        return empCarAllocation;
    } catch (error) {
        logError('Error in retrieving employee car allocation by ID', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocationById',
            empCarAllocationId,
            error,
        });
        throw new Error('Error in retrieving empCarAllocation by ID: ' + error.message);
    }
};
const updateEmpCarAllocation = async (empCarAllocationId, empCarAllocationData) => {
    try {
        logInfo('Updating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'updateEmpCarAllocation',
            empCarAllocationId,
            empCarAllocationData,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(Number(empCarAllocationId));
        if (empCarAllocation) {
            await empCarAllocation.update(empCarAllocationData);
            logInfo('Employee car allocation updated successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'updateEmpCarAllocation',
                empCarAllocationId,
            });
            return empCarAllocation;
        } else {
            logInfo('Employee car allocation not found for update', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'updateEmpCarAllocation',
                empCarAllocationId,
            });
            return null;
        }
    } catch (error) {
        logError('Error in updating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'updateEmpCarAllocation',
            empCarAllocationId,
            error,
        });
        throw new Error('Error in updating empCarAllocation: ' + error.message);
    }
};
const deleteEmpCarAllocation = async (empCarAllocationId) => {
    try {
        logInfo('Deleting employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'deleteEmpCarAllocation',
            empCarAllocationId,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAllocationId);
        if (empCarAllocation) {
            await empCarAllocation.destroy();
            logInfo('Employee car allocation deleted successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'deleteEmpCarAllocation',
                empCarAllocationId,
            });
            return true;
        } else {
            logInfo('Employee car allocation not found for deletion', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'deleteEmpCarAllocation',
                empCarAllocationId,
            });
            return false;
        }
    } catch (error) {
        logError('Error in deleting employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'deleteEmpCarAllocation',
            empCarAllocationId,
            error,
        });
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
