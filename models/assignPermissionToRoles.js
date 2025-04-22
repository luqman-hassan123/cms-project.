const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const AssignPermissionToRole = sequelize.define("assignPermissiontoRole", {
  assignPermissionToRoleId:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
  },
  userRoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  permissionId: {
    type: DataTypes.INTEGER,
    allowNull:false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
}
},
{
timestamps: true,
createdAt: "created_at", 
updatedAt: "updated_at", 
},
);

module.exports = AssignPermissionToRole;

