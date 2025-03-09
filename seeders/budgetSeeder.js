module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("budgets", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE budgets AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("Budgets", [
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
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Budgets", null, {truncate: true, cascade: true, restartIdentity: true });
  },
};
