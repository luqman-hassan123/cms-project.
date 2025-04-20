const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const {
  createRole,
  getRoles,
  getRoleById,
  updateRole,
  deleteRole,
} = require("../controllers/userRoleController");
const {
  validateUserRoleId,
  validateRoleCreation,
  validateRoleUpdate,
} = require("../validation/userRoleValidation");

// Public route (if needed)
//router.post("/", validateRoleCreation, createRole);
// Protected routes with authentication & permissions
router.post("/", authMiddleware, permissionMiddleware("create_role"), validateRoleCreation, createRole);
router.get("/", authMiddleware, permissionMiddleware("view_roles"), getRoles);
router.get("/:userRoleId", authMiddleware, permissionMiddleware("view_roles"), validateUserRoleId, getRoleById);
router.put("/:userRoleId", authMiddleware, permissionMiddleware("edit_role"), validateRoleUpdate, updateRole);
router.delete("/:userRoleId", authMiddleware, permissionMiddleware("delete_role"), validateUserRoleId, deleteRole);

module.exports = router;
