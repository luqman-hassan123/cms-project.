const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("Budgets", [
      {
        departmentId: 1,
        newCarBudget: 50000.0,
        maintenanceBudget: 15000.0,
        description: "Annual budget for new cars and maintenance",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 2,
        newCarBudget: 70000.0,
        maintenanceBudget: 20000.0,
        description: "Quarterly budget allocation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 3,
        newCarBudget: 100000.0,
        maintenanceBudget: 25000.0,
        description: "Budget for fleet expansion",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("Budgets", null, {});
  },
};
