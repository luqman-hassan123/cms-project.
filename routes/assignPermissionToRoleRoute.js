const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");

const {
  createAssignPermissionToRole,
  getAllAssignPermissionToRole,
  getAssignPermissionToRoleById,
  updateAssignPermissionToRole,
  deleteAssignPermissionToRole,
} = require("../controllers/assignPermissionToRoleController");

const {
  validateAssignPermissionToRoleCreation,
  validateAssignPermissionToRoleUpdate,
  validateAssignPermissionToRoleId,
} = require("../validation/assignPermissionToRoleValidation");

router.post(
  "/",
  authMiddleware,
  permissionMiddleware("assign_permissions"),
  validateAssignPermissionToRoleCreation,
  createAssignPermissionToRole
);

router.get(
  "/",
  authMiddleware,
  permissionMiddleware("view_assign_permissions"),
  getAllAssignPermissionToRole
);

router.get(
  "/:id",
  authMiddleware,
  permissionMiddleware("view_assign_permissions"),
  validateAssignPermissionToRoleId,
  getAssignPermissionToRoleById
);

router.put(
  "/:id",
  authMiddleware,
  permissionMiddleware("edit_assign_permissions"),
  validateAssignPermissionToRoleId,
  validateAssignPermissionToRoleUpdate,
  updateAssignPermissionToRole
);

router.delete(
  "/:id",
  authMiddleware,
  permissionMiddleware("delete_assign_permissions"),
  validateAssignPermissionToRoleId,
  deleteAssignPermissionToRole
);

module.exports = router;
