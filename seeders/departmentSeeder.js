const { QueryInterface, DATEONLY } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("departments", [
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
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("departments", null, {});
  },
};
