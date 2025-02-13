const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("drivers", [
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
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("drivers", null, {});
  },
};
