const departmentRepo = require ('../repositories/departmentRepo')
const {logInfo, logError} = require('../config/logger');


const createDepartmentService = async (name, description, ministry_id) => {
    try{
        logInfo('Creating department', {filePath: 'services/departmentService', methodName: 'createDepartmentService', name, description, ministry_id});
        const result = await departmentRepo.createDepartment(name, description, ministry_id );
        logInfo('department created successfully', {filePath: 'services/departmentService', methodName: 'createDepartmentService', dep_id: result.dep_id});
        return result;
    }catch(error){
        logError('Error creating department', {filePath: 'services/departmentService', methodName: 'createDepartmentService', error});
    }
};
const getDepartmentsService = async () => {
    try{
        logInfo('Getting all departments', {filePath: 'services/departmentService', methodName: 'getDepartmentsService'});
        logInfo(`Fetched ${departments.length} departments`, {filePath:'services/departmentService', methodName: 'getDepartmentsService'})
    }catch(error){
        logError('Error getting all departments', {filePath: 'services/departmentService', methodName: 'getDepartmentsService', error });
        throw error;
    }
};
const getDepartmentByIdService = async (dep_id) => {
    try{
        logInfo('Getting department by id', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', dep_id});
        const department = await departmentRepo.getDepartmentById(dep_id);
        if(!department){
            logInfo('Department not found', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', dep_id});
        }
        return department;
    }catch(error){
        logError('Error getting department by id', {filePath: 'services/departmentService', methodName: 'getDepartmentByIdService', error });
        throw error;
    }
};
const updateDepartmentService = async (dep_id, name, description, ministry_id) => {
   try{
    logInfo('Updating department', {filePath: 'services/departmentService', methodName: 'updateDepartmentService', dep_id, name, description, ministry_id});
    const updateDepartment = await departmentRepo.updateDepartment(dep_id, name, description, ministry_id);
    return updateDepartment;
   }catch(error){
    logError('Error updating department', {filePath: 'services/departmentService', methodName: 'updateDepartmentService', error});
    throw error;
   }
};
const deleteDepartmentService = async (dep_id) => {
    try{
        logInfo('Deleting department', {filePath: 'services/departmentService', methodName: 'deleteDepartmentService', dep_id});
        const deleteddepartment =  await departmentRepo.deleteDepartment(dep_id);
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
