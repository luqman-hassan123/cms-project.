module.exports = {
  up: async (queryInterface) => {
    // Delete existing assignments
    await queryInterface.bulkDelete("assignrolestousers", null, {});
    // Reset auto-increment
    await queryInterface.sequelize.query("ALTER TABLE assignrolestousers AUTO_INCREMENT = 1");
    // Insert sample role assignments
    return queryInterface.bulkInsert("assignrolestousers", [
      {
        userId: 1, // Assumes user with ID 1 exists
        userRoleId: 1, // Assumes role ID 1 exists (e.g., Admin)
        description: "Assigning Admin role to user 1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userId: 2,
        userRoleId: 2, // e.g., User
        description: "Assigning User role to user 2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userId: 3,
        userRoleId: 3, // e.g., Support
        description: "Assigning Support role to user 3",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("assignrolestousers", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
