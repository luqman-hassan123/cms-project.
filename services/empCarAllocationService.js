const empCarAllocationRepo = require('../repositories/empCarAllocationRepo');
const { logInfo, logError} = require ('../config/logger');

const createEmpCarAllocation = async (empCarAllocationData) => {
    try {
        logInfo('creatinig new employee car allocation', {filePath: 'repositories/empCarAllocationService' , methodName: 'createEmpCarAllocation'})
        const newEmpCarAllocation = await empCarAllocationRepo.createEmpCarAllocation(empCarAllocationData);
        logInfo('employee car allocated successfully',  {filePath: 'repositories/empCarAllocationService' , methodName: 'createEmpCarAllocation'} )
        return newEmpCarAllocation;
    } catch (error) {
        logError('Error creating employee car allocation', {filePath: 'repositories/empCarAllocationService', methodName: 'createEmpCarAllocation', error})
        throw new Error('Service Error - Creating empCarAllocation: ' + error.message);
    }
};
const getEmpCarAllocations = async () => {
    try {
        logInfo('Retrieving employee car allocations', {filePath: 'repositories/empCarAllocationService', methodName: 'getEmpCarAllocations'});
        const empCarAllocations = await empCarAllocationRepo.getEmpCarAllocations();
        logInfo('Employee car allocations retrieved successfully', {filePath: 'repositories/empCarAllocationService', methodName: 'getEmpCarAllocations'});
        return empCarAllocations;
    } catch (error) {
        logError('Error retrieving employee car allocations', {filePath: 'repositories/empCarAllocationService', methodName: 'getEmpCarAllocations', error});
        throw new Error('Service Error - Retrieving empCarAllocations: ' + error.message);
    }
};
const getEmpCarAllocationById = async (empCarAllocationId) => {
    try {
        logInfo('Retrieving employee car allocation by ID', {filePath: 'repositories/empCarAllocationService',methodName: 'getEmpCarAllocationById',empCarAllocationId});
        const empCarAllocation = await empCarAllocationRepo.getEmpCarAllocationById(empCarAllocationId);
        if (!empCarAllocation) {
            logError('Employee car allocation not found', {
                filePath: 'repositories/empCarAllocationService',
                methodName: 'getEmpCarAllocationById',
                empCarAllocationId,
            });
            throw new Error('EmpCarAllocation not found');
        }
        logInfo('Employee car allocation retrieved successfully', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'getEmpCarAllocationById',
        });
        return empCarAllocation;
    } catch (error) {
        logError('Error retrieving employee car allocation by ID', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'getEmpCarAllocationById',
            empCarAllocationId,
            error,
        });
        throw new Error('Service Error - Retrieving empCarAllocation by ID: ' + error.message);
    }
};
const updateEmpCarAllocation = async (empCarAllocationId, empCarAllocationData) => {
    try {
        logInfo('Updating employee car allocation', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'updateEmpCarAllocation',
            empCarAllocationId,
        });
        const updatedEmpCarAllocation = await empCarAllocationRepo.updateEmpCarAllocation(empCarAllocationId, empCarAllocationData);
        if (!updatedEmpCarAllocation) {
            logError('Employee car allocation not found for update', {
                filePath: 'repositories/empCarAllocationService',
                methodName: 'updateEmpCarAllocation',
                empCarAllocationId,
            });
            throw new Error('EmpCarAllocation not found');
        }
        logInfo('Employee car allocation updated successfully', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'updateEmpCarAllocation',
        });
        return updatedEmpCarAllocation;
    } catch (error) {
        logError('Error updating employee car allocation', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'updateEmpCarAllocation',
            empCarAllocationId,
            error,
        });
        throw new Error('Service Error - Updating empCarAllocation: ' + error.message);
    }
};
const deleteEmpCarAllocation = async (empCarAllocationId) => {
    try {
        logInfo('deleting employee car allocation ', {filePath: 'services/empCarAllocationService', methodName: 'deleteEmpCarAllocation', empCarAllocationId })
        const deleted = await empCarAllocationRepo.deleteEmpCarAllocation(empCarAllocationId);
        if (!deleted) {
            throw new Error('EmpCarAllocation not found');
        }
        logInfo('Employee car allocation deleted successfully', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'deleteEmpCarAllocation',
        });
        return { message: 'EmpCarAllocation deleted successfully' };
    } catch (error) {
        logError('Error deleting employee car allocation', {
            filePath: 'repositories/empCarAllocationService',
            methodName: 'deleteEmpCarAllocation',
            empCarAllocationId,
            error,
        });
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
