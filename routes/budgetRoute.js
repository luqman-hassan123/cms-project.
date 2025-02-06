const express = require("express");
const {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
} = require("../controllers/budgetController");
const {
    validateBudgetId,
    validateBudgetCreation,
    validateBudgetUpdate
    } = require("../validation/budgetValidation");
const router = express.Router();

router.post('/', validateBudgetCreation, createBudget);
router.get('/', getBudgets);
router.get('/:budgetId', validateBudgetId ,getBudgetById);
router.put('/:budgetId', validateBudgetUpdate ,updateBudget);
router.delete('/:budgetId', validateBudgetId ,deleteBudget);

module.exports = router;
