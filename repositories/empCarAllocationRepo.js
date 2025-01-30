const EmployeeCarAllocation = require('../models/employeeCarAllocation'); 
const { logInfo, logError } = require ('../config/logger') 
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
            empCarAlloId: newEmpCarAllocation.id,
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
        const empCarAllocations = await EmployeeCarAllocation.findAll(); 
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
const getEmpCarAllocationById = async (empCarAlloId) => {
    try {
        logInfo('Retrieving employee car allocation by ID', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocationById',
            empCarAlloId,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId);
        if (empCarAllocation) {
            logInfo('Employee car allocation retrieved successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'getEmpCarAllocationById',
                empCarAlloId,
            });
        } else {
            logInfo('Employee car allocation not found', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'getEmpCarAllocationById',
                empCarAlloId,
            });
        }
        return empCarAllocation;
    } catch (error) {
        logError('Error in retrieving employee car allocation by ID', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'getEmpCarAllocationById',
            empCarAlloId,
            error,
        });
        throw new Error('Error in retrieving empCarAllocation by ID: ' + error.message);
    }
};
const updateEmpCarAllocation = async (empCarAlloId, empCarAllocationData) => {
    try {
        logInfo('Updating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'updateEmpCarAllocation',
            empCarAlloId,
            empCarAllocationData,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId);
        if (empCarAllocation) {
            await empCarAllocation.update(empCarAllocationData);
            logInfo('Employee car allocation updated successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'updateEmpCarAllocation',
                empCarAlloId,
            });
            return empCarAllocation;
        } else {
            logInfo('Employee car allocation not found for update', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'updateEmpCarAllocation',
                empCarAlloId,
            });
            return null;
        }
    } catch (error) {
        logError('Error in updating employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'updateEmpCarAllocation',
            empCarAlloId,
            error,
        });
        throw new Error('Error in updating empCarAllocation: ' + error.message);
    }
};
const deleteEmpCarAllocation = async (empCarAlloId) => {
    try {
        logInfo('Deleting employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'deleteEmpCarAllocation',
            empCarAlloId,
        });
        const empCarAllocation = await EmployeeCarAllocation.findByPk(empCarAlloId);
        if (empCarAllocation) {
            await empCarAllocation.destroy();
            logInfo('Employee car allocation deleted successfully', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'deleteEmpCarAllocation',
                empCarAlloId,
            });
            return true;
        } else {
            logInfo('Employee car allocation not found for deletion', {
                filePath: 'repositories/empCarAllocationRepo',
                methodName: 'deleteEmpCarAllocation',
                empCarAlloId,
            });
            return false;
        }
    } catch (error) {
        logError('Error in deleting employee car allocation', {
            filePath: 'repositories/empCarAllocationRepo',
            methodName: 'deleteEmpCarAllocation',
            empCarAlloId,
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
