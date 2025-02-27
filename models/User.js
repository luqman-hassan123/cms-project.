const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const User = sequelize.define(
    "user",
    {
  userId: {
    type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING,
    required: true
  },
  userPassword: {
    type: DataTypes.STRING,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    required: false
  },
},
{
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

module.exports = User;
