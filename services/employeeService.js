const employeeRepo = require ('../repositories/employeeRepo');

const createEmployee = async (dep_id, emp_name, rank, description) => {
    return await employeeRepo.createEmployee(dep_id, emp_name, rank, description);
};
const getAllEmployee = async () => {
    return await employeeRepo.getAllEmployee();
};
const getEmployeeById = async (emp_id) => {
    return await employeeRepo.getEmployeeById(emp_id);
};
const updateEmployee = async (emp_id, { dep_id, emp_name, rank, description }) => {
    return await employeeRepo.updateEmployee(emp_id, { dep_id, emp_name, rank, description });
};
const deleteEmployee = async (emp_id) => {
    return await employeeRepo.deleteEmployee(emp_id);
};

module.exports = {
    createEmployee,
    getAllEmployee,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}
