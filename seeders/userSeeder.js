const { QueryInterface } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (QueryInterface) => {
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("securepass456", 10);
    const hashedPassword3 = await bcrypt.hash("admin789", 10);

    return QueryInterface.bulkInsert("users", [
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
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("users", null, {});
  },
};
