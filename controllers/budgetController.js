const { logInfo, logError } = require('../config/logger');
const budgetService = require('../services/budgetService');

const createBudget = async (req, res) => {
  try {
    const budgetData = req.body;
    logInfo('Request to create a new budget', { filePath: 'controllers/budgetController', methodName: 'createBudget' });
    const budget = await budgetService.createBudget(budgetData);
    logInfo('Budget created successfully', { filePath: 'controllers/budgetController', methodName: 'createBudget', budgetId: budget.id });
    res.status(201).json({
      message: 'Budget created successfully',
      budget,
    });
  } catch (error) {
    logError('Error creating budget', { filePath: 'controllers/budgetController', methodName: 'createBudget', error: error.message });
    res.status(500).json({
      message: 'Error creating budget',
      error: error.message,
    });
  }
};
const getBudgets = async (req, res) => {
  try {
    logInfo('Request to fetch all budgets', { filePath: 'controllers/budgetController', methodName: 'getBudgets' });
    const budgets = await budgetService.getBudgets();
    logInfo('Budgets fetched successfully', { filePath: 'controllers/budgetController', methodName: 'getBudgets', count: budgets.length });
    res.status(200).json({
      message: 'Budgets fetched successfully',
      budgets,
    });
  } catch (error) {
    logError('Error fetching budgets', { filePath: 'controllers/budgetController', methodName: 'getBudgets', error: error.message });
    res.status(500).json({
      message: 'Error fetching budgets',
      error: error.message,
    });
  }
};
const getBudgetById = async (req, res) => {
  try {
    const { budgetId } = req.params;
    logInfo('Request to fetch budget by ID', { filePath: 'controllers/budgetController', methodName: 'getBudgetById', budgetId });
    const budget = await budgetService.getBudgetById(budgetId);
    if (budget) {
      logInfo('Budget fetched successfully', { filePath: 'controllers/budgetController', methodName: 'getBudgetById', budgetId: budget.id });
      res.status(200).json({
        message: 'Budget fetched successfully',
        budget,
      });
    } else {
      logError('Budget not found', { filePath: 'controllers/budgetController', methodName: 'getBudgetById', budgetId });
      res.status(404).json({
        message: 'Budget not found',
      });
    }
  } catch (error) {
    logError('Error fetching budget by ID', { filePath: 'controllers/budgetController', methodName: 'getBudgetById', error: error.message });
    res.status(500).json({
      message: 'Error fetching budget by ID',
      error: error.message,
    });
  }
};
const updateBudget = async (req, res) => {
  try {
    const { budgetId } = req.params;
    const budgetData = req.body;
    logInfo('Request to update budget', { filePath: 'controllers/budgetController', methodName: 'updateBudget', budgetId });
    const updatedBudget = await budgetService.updateBudget(budgetId, budgetData);
    logInfo('Budget updated successfully', { filePath: 'controllers/budgetController', methodName: 'updateBudget', budgetId: updatedBudget.id });
    res.status(200).json({
      message: 'Budget updated successfully',
      updatedBudget,
    });
  } catch (error) {
    logError('Error updating budget', { filePath: 'controllers/budgetController', methodName: 'updateBudget', error: error.message });
    res.status(500).json({
      message: 'Error updating budget',
      error: error.message,
    });
  }
};
const deleteBudget = async (req, res) => {
  try {
    const { budgetId } = req.params;
    logInfo('Request to delete budget', { filePath: 'controllers/budgetController', methodName: 'deleteBudget', budgetId });
    const result = await budgetService.deleteBudget(budgetId);
    logInfo('Budget deleted successfully', { filePath: 'controllers/budgetController', methodName: 'deleteBudget', budgetId });
    res.status(200).json({
      message: 'Budget deleted successfully',
      result,
    });
  } catch (error) {
    logError('Error deleting budget', { filePath: 'controllers/budgetController', methodName: 'deleteBudget', error: error.message });
    res.status(500).json({
      message: 'Error deleting budget',
      error: error.message,
    });
  }
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};
