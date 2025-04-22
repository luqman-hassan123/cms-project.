const express = require("express");
const router = express.Router();
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
console.log("authMiddleware:", authMiddleware);
console.log("permissionMiddleware:", permissionMiddleware);

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
//console
console.log("Exported userController in user route functions:", {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
});
const {
  validateUserId,
  validateUserCreation,
  validateUserUpdate,
} = require("../validation/userValidation");
// Public routes (no authentication required)
//router.post("/", validateUserCreation, createUser);
// protected routes

router.post('/', authMiddleware, validateUserCreation, createUser);
router.get('/', authMiddleware, permissionMiddleware("view_users"), getUsers);
router.get('/:userId', authMiddleware, permissionMiddleware("view_users") ,validateUserId, getUserById);
router.put('/:userId', authMiddleware, permissionMiddleware("edit_user") ,validateUserUpdate, updateUser);
router.delete('/:userId', authMiddleware, permissionMiddleware("delete_user") ,validateUserId, deleteUser);

module.exports = router;
