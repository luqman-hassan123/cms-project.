module.exports = {
  up: async (queryInterface) => {
    // Delete all previous records
    await queryInterface.bulkDelete("carDriverReservations", null, {});
    // Reset the auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE carDriverReservations AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("Cardriverreservations", [
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
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Cardriverreservations", null, {truncate: true, cascade: true, restartIdentity: true });
  },
};
