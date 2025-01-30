const employeeRepo = require ('../repositories/employeeRepo');
const { logInfo, logError } = require('../config/logger') 

const createEmployee = async (dep_id, emp_name, rank, description) => {
    try{
        logInfo('creating new Employee', {filePath: 'services/employeeService', methodName: 'createEmployee'});
        const newEmployee = await employeeRepo.createEmployee(dep_id, emp_name, rank, description);
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
        logInfo(`Employees retrieved successfully: ${JSON.stringify(employees, null, 2)},`, {filePath: 'services/employeeService', methodName: 'getAllEmployee'});
        return employees;
    } catch (error) {
        logError(`Error retrieving all employees: ${error.message}`, {filePath: 'services/employeeService', methodName: 'getAllEmployee', error: error.message  });
        throw error;
    }
};
const getEmployeeById = async (emp_id) => {
    try {
        logInfo(`Retrieving employee with ID: ${emp_id}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById'});
        const employee = await employeeRepo.getEmployeeById(emp_id);
        logInfo(`Employee retrieved successfully: ${JSON.stringify(employee, null, 2)}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById'});
        return employee;
    } catch (error) {
        logError(`Error retrieving employee by ID: ${error.message}`, {filePath: 'services/employeeService', methodName: 'getEmployeeById',  error: error.message });
        throw error;
    }

};
const updateEmployee = async (emp_id, { dep_id, emp_name, rank, description }) => {
    try {
        logInfo(`Updating employee with ID: ${emp_id}, details: dep_id=${dep_id}, emp_name=${emp_name}, rank=${rank}, description=${description}`, {filePath: 'services/employeeService', methodName: 'updateEmployee'});
        const updatedEmployee = await employeeRepo.updateEmployee(emp_id, { dep_id, emp_name, rank, description });
        logInfo(`Employee updated successfully: ${JSON.stringify(updatedEmployee, null, 2)}`,  {filePath: 'services/employeeService', methodName: 'updateEmployee'});
        return updatedEmployee;
    } catch (error) {
        logError(`Error updating employee: ${error.message}`,  {filePath: 'services/employeeService', methodName: 'updateEmployee',  error: error.message });
        throw error;
    }
};
const deleteEmployee = async (emp_id) => {
    try {
        logInfo(`Deleting employee with ID: ${emp_id}`,  {filePath: 'services/employeeService', methodName: 'deleteEmployee'});
        const result = await employeeRepo.deleteEmployee(emp_id);
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
