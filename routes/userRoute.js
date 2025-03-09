const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
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

// Public routes (no authentication required)
router.post("/", validateUserCreation, createUser);
// protected routes
router.post('/', authMiddleware ,validateUserCreation, createUser);
router.get('/', authMiddleware, getUsers);
router.get('/:userId', authMiddleware, validateUserId, getUserById);
router.put('/:userId', authMiddleware,  validateUserUpdate, updateUser);
router.delete('/:userId', authMiddleware, validateUserId, deleteUser);

module.exports = router;
