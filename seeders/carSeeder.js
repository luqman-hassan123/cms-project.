const { QueryInterface, DATEONLY } = require("sequelize");

module.exports = {
  up: async (QueryInterface) => {
    return QueryInterface.bulkInsert("cars", [ 
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
  down: async (QueryInterface) => {
    return QueryInterface.bulkDelete("cars", null, {});
  },
};
