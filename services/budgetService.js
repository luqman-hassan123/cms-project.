const { logInfo, logError } = require('../config/logger');
const budgetRepo = require('../repositories/budgetRepo');

const createBudget = async (budgetData) => {
  try {
    logInfo('Creating budget', { filePath: 'services/budgetService', methodName: 'createBudget' });
    const budget = await budgetRepo.createBudget(budgetData);
    logInfo('Budget created successfully', { filePath: 'services/budgetService', methodName: 'createBudget', budget });
    return budget;
  } catch (error) {
    logError('Error creating budget', { filePath: 'services/budgetService', methodName: 'createBudget', error: error.message });
    throw new Error('Error creating budget: ' + error.message);
  }
};
const getBudgets = async () => {
  try {
    logInfo('Fetching all budgets', { filePath: 'services/budgetService', methodName: 'getBudgets' });
    const budgets = await budgetRepo.getBudgets();
    logInfo('Budgets fetched successfully', { filePath: 'services/budgetService', methodName: 'getBudgets', count: budgets.length });
    return budgets;
  } catch (error) {
    logError('Error fetching budgets', { filePath: 'services/budgetService', methodName: 'getBudgets', error: error.message });
    throw new Error('Error fetching budgets: ' + error.message);
  }
};
const getBudgetById = async (budgetId) => {
  try {
    logInfo('Fetching budget by ID', { filePath: 'services/budgetService', methodName: 'getBudgetById' });
    const budget = await budgetRepo.getBudgetById(budgetId);
    if (budget) {
      logInfo('Budget fetched successfully', { filePath: 'services/budgetService', methodName: 'getBudgetById' });
      return budget;
    } else {
      logError('Budget not found', { filePath: 'services/budgetService', methodName: 'getBudgetById', budgetId });
      throw new Error('Budget not found');
    }
  } catch (error) {
    logError('Error fetching budget by ID', { filePath: 'services/budgetService', methodName: 'getBudgetById', error: error.message });
    throw new Error('Error fetching budget by ID: ' + error.message);
  }
};
const updateBudget = async (budgetId, budgetData) => {
  try {
    logInfo('Updating budget', { filePath: 'services/budgetService', methodName: 'updateBudget', budgetId });
    const updatedBudget = await budgetRepo.updateBudget(budgetId, budgetData);
    if (updatedBudget) {
      logInfo('Budget updated successfully', { filePath: 'services/budgetService', methodName: 'updateBudget', budgetId });
      return updatedBudget;
    } else {
      logError('Budget not found', { filePath: 'services/budgetService', methodName: 'updateBudget', budgetId });
      throw new Error('Budget not found');
    }
  } catch (error) {
    logError('Error updating budget', { filePath: 'services/budgetService', methodName: 'updateBudget', error: error.message });
    throw new Error('Error updating budget: ' + error.message);
  }
};
const deleteBudget = async (budgetId) => {
  try {
    logInfo('Deleting budget', { filePath: 'services/budgetService', methodName: 'deleteBudget' });
    const result = await budgetRepo.deleteBudget(budgetId);
    logInfo('Budget deleted successfully', { filePath: 'services/budgetService', methodName: 'deleteBudget' });
    return result;
  } catch (error) {
    logError('Error deleting budget', { filePath: 'services/budgetService', methodName: 'deleteBudget', error: error.message });
    throw new Error('Error deleting budget: ' + error.message);
  }
};

module.exports = {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget,
};
