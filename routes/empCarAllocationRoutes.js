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
router.delete('/:empCarAlloId', validateEmpCarAllocationId, deleteEmpCarAllocation);
router.put('/:empCarAlloId', validateUpdateEmpCarAllocation, updateEmpCarAllocation);
router.get('/:empCarAlloId', validateEmpCarAllocationId, getEmpCarAllocationById);
router.get('/', getEmpCarAllocations);

module.exports = router;
