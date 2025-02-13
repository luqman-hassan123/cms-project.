const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("maintenances", [
      {
        carId: 1,
        maintenanceDate: new Date("2024-01-10"),
        maintenanceCost: 500,
        maintenanceDescription: "Oil change and tire rotation",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 2,
        maintenanceDate: new Date("2024-02-15"),
        maintenanceCost: 800,
        maintenanceDescription: "Brake pad replacement",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 3,
        maintenanceDate: new Date("2024-03-20"),
        maintenanceCost: 1200,
        maintenanceDescription: "Engine tuning and general maintenance",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("maintenances", null, {});
  },
};
