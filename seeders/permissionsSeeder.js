module.exports = {
  up: async (queryInterface) => {
    // Delete existing permission records
    await queryInterface.bulkDelete("permissions", null, {});
    // Reset auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE permissions AUTO_INCREMENT = 1");
    // Insert sample permissions
    return queryInterface.bulkInsert("permissions", [
      {
        permissionName: "CREATE_USER",
        description: "Allows creating new users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        permissionName: "EDIT_USER",
        description: "Allows editing existing users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        permissionName: "DELETE_USER",
        description: "Allows deleting users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        permissionName: "VIEW_REPORTS",
        description: "Allows viewing system reports",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("permissions", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
