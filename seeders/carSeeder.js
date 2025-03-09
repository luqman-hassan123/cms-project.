module.exports = {
  up: async (queryInterface) => {
    // Delete all previous records
    await queryInterface.bulkDelete("cars", null, {});
    // Reset the auto-increment sequence
    await queryInterface.sequelize.query("ALTER TABLE cars AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("cars", [ 
      {
        departmentId: 1,
        carModel: "2022",
        carMake: "TOYOTA",
        carYear: 2022,
        carCondition: "used",
        carStatus: "reserve",  
        carDescription: "reserve to department",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 2,
        carModel: "2023",
        carMake: "HONDA",
        carYear: 2023,
        carCondition: "used",
        carStatus: "reserve", 
        carDescription: "reserve to department",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        departmentId: 3,
        carModel: "2024",
        carMake: "FORD",
        carYear: 2024,
        carCondition: "used",
        carStatus: "reserve",
        carDescription: "reserve to department",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("cars", null, { truncate: true, cascade: true, restartIdentity: true });
  },
};
