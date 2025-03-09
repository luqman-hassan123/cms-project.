module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("employees", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE employees AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("employees", [
      {
        departmentId: 1,
        employeeName: "Ali",
        rank: "QA",
        description: "Quality Assurance",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 2,
        employeeName: "Ahmed",
        rank: "HR",
        description: "Human Resource",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 3,
        employeeName: "Mohamed",
        rank: "IT",
        description: "Information Technology",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("employees", null, {truncate: true, cascade: true, restartIdentity: true });
  },
};
