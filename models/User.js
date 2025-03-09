const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const bcrypt = require("bcryptjs");

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
    hooks: {
      beforeCreate: async (user) => {
        if (user.userPassword) {
          const salt = await bcrypt.genSalt(10);
          user.userPassword = await bcrypt.hash(user.userPassword, salt);
        }
      },
    },
});
// Compare password method
User.prototype.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.userPassword);
};

module.exports = User;
