module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("drivers", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE drivers AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("drivers", [
      {
        departmentId: 1,
        driverName: "John Doe",
        driverLicenseNumber: "DL12345678",
        driverAvailability: true,
        driverDescription: "Experienced driver with 10+ years of experience",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 2,
        driverName: "Jane Smith",
        driverLicenseNumber: "DL87654321",
        driverAvailability: false,
        driverDescription: "On leave for medical reasons",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 3,
        driverName: "Michael Johnson",
        driverLicenseNumber: "DL56781234",
        driverAvailability: true,
        driverDescription: "Certified driver with expertise in long-haul transportation",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("drivers", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
