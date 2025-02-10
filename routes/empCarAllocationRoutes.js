const express = require('express');
const router = express.Router();
const {
    createEmpCarAllocation,
    deleteEmpCarAllocation,
    getEmpCarAllocations,
    getEmpCarAllocationById,
    updateEmpCarAllocation,
} = require('../controllers/empCarAllocationController');
const {
    validateCreateEmpCarAllocation,
    validateUpdateEmpCarAllocation,
    validateEmpCarAllocationId,
} = require('../validation/empCarAllocationValidation');

router.post('/', validateCreateEmpCarAllocation, createEmpCarAllocation);
router.delete('/:empCarAllocationId', validateEmpCarAllocationId, deleteEmpCarAllocation);
router.put('/:empCarAllocationId', validateUpdateEmpCarAllocation, updateEmpCarAllocation);
router.get('/:empCarAllocationId', validateEmpCarAllocationId, getEmpCarAllocationById);
router.get('/', getEmpCarAllocations);

module.exports = router;
