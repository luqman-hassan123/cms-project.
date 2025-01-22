const departmentRepo = require ('../repositories/departmentRepo')
const createDepartmentService = async (name, description, ministry_id) => {
    return await departmentRepo.createDepartment( name, description, ministry_id );
};
const getDepartmentsService = async () => {
    return await departmentRepo.getAllDepartment();
};
const getDepartmentByIdService = async (dep_id) => {
    return await departmentRepo.getDepartmentById(dep_id);
};
const updateDepartmentService = async (dep_id, name, description, ministry_id) => {
    return await departmentRepo.updateDepartment (dep_id, name, description, ministry_id)
};
const deleteDepartmentService = async (dep_id) => {
    return await departmentRepo.deleteDepartment(dep_id)
};

module.exports = {
    createDepartmentService,
    getDepartmentsService,
    getDepartmentByIdService,
    deleteDepartmentService,
    updateDepartmentService,
};
