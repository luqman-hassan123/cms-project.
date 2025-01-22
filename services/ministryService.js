// Example service (optional layer)
/*
in this file call only the function which define in the repository file 
call to repositores functions and expose it to just controller

*/
const ministryRepo = require('../repositories/ministryRepo');
const createMinistryService = async (name, address, description) => {
    return await ministryRepo.createMinistry(name, address, description);
};
const getMinistriesService = async () => {
    return await ministryRepo.getMinistries();
};
const getMinistryByIdService = async (id) => {
    return await ministryRepo.getMinistryById(id);
};
const updateMinistryService = async (ministry_id, name, address, description) => {
    return await ministryRepo.updateMinistry(ministry_id, name, address, description);
};
const deleteMinistryService = async (ministry_id) => {
    return await ministryRepo.deleteMinistry(ministry_id);
};

module.exports = {
    createMinistryService,
    getMinistriesService,
    getMinistryByIdService,
    updateMinistryService,
    deleteMinistryService,
};
