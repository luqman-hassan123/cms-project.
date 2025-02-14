const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("caremployeehistories", [
      {
        carId: 1,
        employeeId: 1,
        startDate: "2024-01-05",
        endDate: "2024-06-10",
        description: "Assigned to employee for daily commute",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 2,
        employeeId: 2,
        startDate: "2024-02-20",
        endDate: "2024-08-15",
        description: "Used for office transport",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 3,
        employeeId: 3,
        startDate: "2024-03-15",
        endDate: null,
        description: "Currently assigned for official use",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("caremployeehistories", null, {});
  },
};
