module.exports = {
  up: async (queryInterface) => {
    // Delete existing records
    await queryInterface.bulkDelete("userRoles", null, {});
    // Reset auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE userRoles AUTO_INCREMENT = 1");
    // Insert sample roles
    return queryInterface.bulkInsert("userRoles", [
      {
        roleName: "Admin",
        description: "Full access to all features and settings.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        roleName: "User",
        description: "Limited access, can manage their own data.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        roleName: "Support",
        description: "Can assist users and view reports.",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("userRoles", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
