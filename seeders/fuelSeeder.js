const { QueryInterface } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
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
    return queryInterface.bulkDelete("fuel", null, {});
  },
};
