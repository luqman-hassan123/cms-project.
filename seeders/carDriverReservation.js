const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("Cardriverreservations", [
      {
        carId: 1,
        driverId: 1,
        description: "Reserved for long-distance travel",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 2,
        driverId: 2,
        description: "Assigned for VIP transport",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 3,
        driverId: 3,
        description: "Reserved for company logistics",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("Cardriverreservations", null, {});
  },
};
