module.exports = {
  up: async (queryInterface) => {
    // Delete previous assignments
    await queryInterface.bulkDelete("assignPermissiontoRole", null, {});
    // Reset auto-increment
    await queryInterface.sequelize.query("ALTER TABLE assignPermissiontoRole AUTO_INCREMENT = 1");
    // Seed role-permission mappings
    return queryInterface.bulkInsert("assignPermissiontoRoles", [
      {
        userRoleId: 1, // Admin
        permissionId: 1, // CREATE_USER
        description: "Admin can create users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userRoleId: 1,
        permissionId: 2, // EDIT_USER
        description: "Admin can edit users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userRoleId: 1,
        permissionId: 3, // DELETE_USER
        description: "Admin can delete users",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userRoleId: 2, // Regular User
        permissionId: 4, // VIEW_REPORTS
        description: "User can view reports",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userRoleId: 3, // Support
        permissionId: 4,
        description: "Support can view reports",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("assignPermissiontoRoles", null, {
      truncate: true,
      cascade: true,
      restartIdentity: true,
    });
  },
};
