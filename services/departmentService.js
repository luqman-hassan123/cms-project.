const departmentRepo = require ('../repositories/departmentRepo')
const {logInfo, logError} = require('../config/logger');

const createDepartmentService = async (name, description, ministryId) => {
    try{
        logInfo('Creating department', {filePath: 'services/departmentService', methodName: 'createDepartmentService', name, description, ministryId});
        const result = await departmentRepo.createDepartment(name, description, ministryId );
        logInfo('department created successfully', {filePath: 'services/departmentService', methodName: 'createDepartmentService', departmentId: result.departmentId});
        return result;
    }catch(error){
        logError('Error creating department', {filePath: 'services/departmentService', methodName: 'createDepartmentService', error});
    }
};
const getDepartmentsService = async () => {
    try {
        logInfo('Getting all departments', { filePath: 'services/departmentService', methodName: 'getDepartmentsService' });
        const departments = await departmentRepo.getAllDepartment();
        logInfo(`Fetched ${departments.length} departments`, { filePath: 'services/departmentService', methodName: 'getDepartmentsService' });
        return departments; 
    } catch (error) {
        logError('Error getting all departments', { filePath: 'services/departmentService', methodName: 'getDepartmentsService', error });
        throw error;
    }
};
const getDepartmentByIdService = async (departmentId) => {
    try{
        logInfo('Getting department by id', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', departmentId});
        const department = await departmentRepo.getDepartmentById(departmentId);
        if(!department){
            logInfo('Department not found', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', departmentId});
        }
        return department;
    }catch(error){
        logError('Error getting department by id', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', error });
        throw error;
    }
};
const updateDepartmentService = async (departmentId, name, description, ministryId) => {
   try{
    logInfo('Updating department', {filePath: 'services/departmentService', methodName: 'updateDepartmentService', departmentId, name, description, ministryId});
    const updateDepartment = await departmentRepo.updateDepartment(departmentId, name, description, ministryId);
    logInfo('Department update successfully', {filePath: 'services/departmentService', methodName: 'updateDepartmentService', departmentId, name, description, ministryId});
    return updateDepartment;
   }catch(error){
    logError('Error updating department', {filePath: 'services/departmentService', methodName: 'updateDepartmentService', error});
    throw error;
   }
};
const deleteDepartmentService = async (departmentId) => {
    try{
        logInfo('Deleting department', {filePath: 'services/departmentService', methodName: 'deleteDepartmentService', departmentId});
        const deleteddepartment =  await departmentRepo.deleteDepartment(departmentId);
        logInfo('Deleting department successfully', {filePath: 'services/departmentService', methodName: 'deleteDepartmentService', departmentId});
        return deleteddepartment;
    }catch(error){
        logError('Error deleting department', {filePath: 'services/departmentService', methodName: 'deleteDepartmentService', error});
        throw error;

    }
};

module.exports = {
    createDepartmentService,
    getDepartmentsService,
    getDepartmentByIdService,
    deleteDepartmentService,
    updateDepartmentService,
};
