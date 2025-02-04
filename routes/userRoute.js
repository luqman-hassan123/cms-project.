const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {
  validateUserId,
  validateUserCreation,
  validateUserUpdate,
} = require("../validation/userValidation");

router.post('/', validateUserCreation, createUser);
router.get('/', getUsers);
router.get('/:userId', validateUserId, getUserById);
router.put('/:userId', validateUserUpdate, updateUser);
router.delete('/:userId', validateUserId, deleteUser);

module.exports = router;
