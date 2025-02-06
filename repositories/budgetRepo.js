const Budget = require('../models/Budget');
const { logInfo, logError } = require('../config/logger');

const createBudget = async (budgetData) => {
  try {
    logInfo('Creating budget', { filePath: 'repositories/budgetRepo', methodName: 'createBudget' });
    const budget = await Budget.create(budgetData);
    logInfo('Budget created successfully', {
      filePath: 'repositories/budgetRepo',
      methodName: 'createBudget',
      budget,
    });
    return budget;
  } catch (error) {
    logError('Error creating budget', {
      filePath: 'repositories/budgetRepo',
      methodName: 'createBudget',
      error: error.message,
    });
    throw new Error('Error creating budget: ' + error.message);
  }
};
const getBudgets = async () => {
  try {
    logInfo('Fetching all budgets', { filePath: 'repositories/budgetRepo', methodName: 'getBudgets' });
    const budgets = await Budget.findAll();
    logInfo('Budgets fetched successfully', {
      filePath: 'repositories/budgetRepo',
      methodName: 'getBudgets',
      count: budgets.length,
    });
    return budgets;
  } catch (error) {
    logError('Error fetching budgets', {
      filePath: 'repositories/budgetRepo',
      methodName: 'getBudgets',
      error: error.message,
    });
    throw new Error('Error retrieving budgets: ' + error.message);
  }
};
const getBudgetById = async (budgetId) => {
  try {
    logInfo('Fetching budget by ID', { filePath: 'repositories/budgetRepo', methodName: 'getBudgetById' });
    const budget = await Budget.findByPk(budgetId);
    logInfo('Budget fetched successfully', { filePath: 'repositories/budgetRepo', methodName: 'getBudgetById' });
    return budget;
  } catch (error) {
    logError('Error fetching budget by ID', {
      filePath: 'repositories/budgetRepo',
      methodName: 'getBudgetById',
      error: error.message,
    });
    throw new Error('Error retrieving budget by ID: ' + error.message);
  }
};
const updateBudget = async (budgetId, budgetData) => {
  try {
    logInfo('Updating budget', { filePath: 'repositories/budgetRepo', methodName: 'updateBudget', budgetId });
    const budget = await Budget.findByPk(budgetId);
    if (budget) {
      await budget.update(budgetData);
      logInfo('Budget updated successfully', {
        filePath: 'repositories/budgetRepo',
        methodName: 'updateBudget',
        budget,
      });
      return budget;
    } else {
      logError('Budget not found', { filePath: 'repositories/budgetRepo', methodName: 'updateBudget', budgetId });
      throw new Error('Budget not found');
    }
  } catch (error) {
    logError('Error updating budget', {
      filePath: 'repositories/budgetRepo',
      methodName: 'updateBudget',
      error: error.message,
    });
    throw new Error('Error updating budget: ' + error.message);
  }
};
const deleteBudget = async (budgetId) => {
  try {
    logInfo('Deleting budget', { filePath: 'repositories/budgetRepo', methodName: 'deleteBudget' });
    const budget = await Budget.findByPk(budgetId);
    if (budget) {
      await budget.destroy();
      logInfo('Budget deleted successfully', { filePath: 'repositories/budgetRepo', methodName: 'deleteBudget' });
      return { message: 'Budget deleted successfully' };
    } else {
      logError('Budget not found', { filePath: 'repositories/budgetRepo', methodName: 'deleteBudget' });
      throw new Error('Budget not found');
    }
  } catch (error) {
    logError('Error deleting budget', {
      filePath: 'repositories/budgetRepo',
      methodName: 'deleteBudget',
      error: error.message,
    });
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
