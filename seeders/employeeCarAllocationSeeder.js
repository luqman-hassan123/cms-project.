module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("empcarallocations", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE empcarallocations AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("empcarallocations", [
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
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("employeeCarAllocations", null, {truncate: true, cascade: true, restartIdentity: true});
  },
};
