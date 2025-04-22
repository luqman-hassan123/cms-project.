const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const AssignRolesToUser = sequelize.define("assignRolesToUser", {
  assignRolesToUserId:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey:true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull:false,
  },
  userRoleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
}
);

module.exports = AssignRolesToUser;

