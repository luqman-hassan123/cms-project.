const employeeRepo = require ('../repositories/employeeRepo');
const { logInfo, logError } = require('../config/logger') 

const createEmployee = async (departmentId, employeeName, rank, description) => {
    try{
        logInfo('creating new Employee', {filePath: 'services/employeeService', methodName: 'createEmployee'});
        const newEmployee = await employeeRepo.createEmployee(departmentId, employeeName, rank, description);
        logInfo('Employee created successfully', {filePath: 'services/employeeService', methodName: 'createEmployee'});
        return newEmployee;
    }catch(error){
        logError('Error creating Employee', { filePath: 'services/employeeService', methodName: 'createEmployee', error: error.message });
        throw error;
    }
};
const getAllEmployee = async () => {
    try {
        logInfo('Retrieving all employees...', {filePath: 'services/employeeService', methodName: 'getAllEmployee'});
        const employees = await employeeRepo.getAllEmployee();
        logInfo("Employees retrieved successfully", {filePath: 'services/employeeService', methodName: 'getAllEmployee'});
        return employees;
    } catch (error) {
        logError(`Error retrieving all employees: ${error.message}`, {filePath: 'services/employeeService', methodName: 'getAllEmployee', error: error.message  });
        throw error;
    }
};
const getEmployeeById = async (employeeId) => {
    try {
        logInfo(`Retrieving employee with ID: ${employeeId}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById'});
        const employee = await employeeRepo.getEmployeeById(employeeId);
        logInfo(`Employee retrieved successfully: ${JSON.stringify(employee, null, 2)}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById'});
        return employee;
    } catch (error) {
        logError(`Error retrieving employee by ID: ${error.message}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById',  error: error.message });
        throw error;
    }
};
const updateEmployee = async (employeeId, { departmentId, employeeName, rank, description }) => {
    try {
        logInfo(`Updating employee with ID: ${employeeId}, details: departmentId=${departmentId}, employeeName=${employeeName}, rank=${rank}, description=${description}`, {filePath: 'services/employeeService', methodName: 'updateEmployee'});
        const updatedEmployee = await employeeRepo.updateEmployee(employeeId, { departmentId, employeeName, rank, description });
        logInfo(`Employee updated successfully: ${JSON.stringify(updatedEmployee, null, 2)}`,  {filePath: 'services/employeeService', methodName: 'updateEmployee'});
        return updatedEmployee;
    } catch (error) {
        logError(`Error updating employee: ${error.message}`,  {filePath: 'services/employeeService', methodName: 'updateEmployee',  error: error.message });
        throw error;
    }
};
const deleteEmployee = async (employeeId) => {
    try {
        logInfo(`Deleting employee with ID: ${employeeId}`,  {filePath: 'services/employeeService', methodName: 'deleteEmployee'});
        const result = await employeeRepo.deleteEmployee(employeeId);
        logInfo(`Employee deleted successfully: ${result}`,  {filePath: 'services/employeeService', methodName: 'deleteEmployee'});
        return result;
    } catch (error) {
        logError(`Error deleting employee: ${error.message}`,  {filePath: 'services/employeeService', methodName: 'deleteEmployee',  error: error.message });
        throw error;
    }
};

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}
