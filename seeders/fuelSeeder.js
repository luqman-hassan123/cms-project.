module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("fuel", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE fuel AUTO_INCREMENT = 1");
    return queryInterface.bulkInsert("fuel", [
      {
        carId: 1,
        fuelType: "Petrol",
        fuelQuantity: 50.5,
        fuelPrice: 100.75,
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 2,
        fuelType: "Diesel",
        fuelQuantity: 60.0,
        fuelPrice: 120.5,
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        carId: 3,
        fuelType: "CNG",
        fuelQuantity: 30.25,
        fuelPrice: 80.0,
        date: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("fuel", null, {truncate: true, cascade: true, restartIdentity: true});
  },
};
