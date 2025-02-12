const { QueryInterface, DATEONLY } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("employees", [
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
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("employees", null, {});
  },
};
