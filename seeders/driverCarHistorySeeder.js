const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("drivercarhistories", [
      {
        driverId: 1,
        carId: 1,
        startDate: "2024-01-01",
        endDate: "2024-06-01",
        description: "Assigned to driver for city transport",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        driverId: 2,
        carId: 2,
        startDate: "2024-02-15",
        endDate: "2024-07-15",
        description: "Used for long-distance travel",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        driverId: 3,
        carId: 3,
        startDate: "2024-03-10",
        endDate: null,
        description: "Currently in use for departmental transport",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("drivercarhistories", null, {});
  },
};
