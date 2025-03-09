"use strict";
const { DATEONLY } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
     // Delete all previous records
     await queryInterface.bulkDelete("ministries", null, {});
     // Reset the auto-increment sequence
     await queryInterface.sequelize.query("ALTER TABLE ministries AUTO_INCREMENT = 1");
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
    return queryInterface.bulkDelete("Ministries", null, {truncate: true, cascade: true, restartIdentity: true});
  },
};
