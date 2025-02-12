"use strict";
const { DATEONLY } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Ministries", [
      {
        name: "Ministry of Health",
        address: "123 Health St, Capital City",
        description: "Handles healthcare policies",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ministry of Education",
        address: "456 Education Ave, Capital City",
        description: "Responsible for education policies",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ministry of Transport",
        address: "789 Transport Rd, Capital City",
        description: "Manages transportation infrastructure",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Ministries", null, {});
  },
};
