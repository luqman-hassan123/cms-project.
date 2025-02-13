const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("EmpCarAllocations", [
      {
        employeeId: 1,
        carId: 1,
        description: "Assigned for project site visits",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        employeeId: 2,
        carId: 2,
        description: "Official car for department head",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        employeeId: 3,
        carId: 3,
        description: "Reserved for field operations",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("EmpCarAllocations", null, {});
  },
};
