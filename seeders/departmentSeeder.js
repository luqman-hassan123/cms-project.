module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("departments", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE departments AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("departments", [
      {
        ministryId: 1,
        name: "cs",
        description: "computer science department",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ministryId: 2,
        name: "Physics",
        description: "Physics department",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        ministryId: 3,
        name: "Maths",
        description: "Maths department",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("departments", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
