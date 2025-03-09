module.exports = {
  up: async (queryInterface) => {
    // Delete all previous records
    await queryInterface.bulkDelete("driverCarHistories", null, {});
    // Reset the auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE drivercarHistories AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("drivercarhistories", [
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
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("drivercarhistories", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
