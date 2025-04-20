const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const UserRole = require("./userRole");
const Permission = require("./permission");

const AssignPermissionToRoles = sequelize.define("assign_permission_to_roles", {
  userRoleId: {
    type: DataTypes.INTEGER,
    references: {
      model: UserRole,
      key: "roleId",
    },
  },
  permissionId: {
    type: DataTypes.INTEGER,
    references: {
      model: Permission,
      key: "permissionId",
    },
  },
});

module.exports = AssignPermissionToRoles;

