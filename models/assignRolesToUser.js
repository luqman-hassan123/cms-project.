const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const User = require("./User");
const UserRole = require("./userRole");

const AssignRolesToUser = sequelize.define("assign_roles_to_user", {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "userId",
    },
  },
  roleId: {
    type: DataTypes.INTEGER,
    references: {
      model: UserRole,
      key: "roleId",
    },
  },
});

module.exports = AssignRolesToUser;

