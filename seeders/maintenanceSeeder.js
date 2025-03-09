module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("maintenances", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE maintenances AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("maintenances", [
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
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("maintenances", null, { truncate: true, cascade: true, restartIdentity: true});
  },
};
