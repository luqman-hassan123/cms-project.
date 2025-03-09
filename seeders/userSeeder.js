//const { queryInterface } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface) => {
    
    // Delete all previous records
    await queryInterface.bulkDelete("users", null, {});
    // Reset the auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE users AUTO_INCREMENT = 1");
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("securepass456", 10);
    const hashedPassword3 = await bcrypt.hash("admin789", 10);

    return queryInterface.bulkInsert("users", [
      {
        userName: "john_doe",
        userPassword: hashedPassword1,
        description: "Admin user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userName: "jane_smith",
        userPassword: hashedPassword2,
        description: "Regular user",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        userName: "alice_wonder",
        userPassword: hashedPassword3,
        description: "Support staff",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
