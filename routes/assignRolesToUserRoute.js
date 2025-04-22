const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const permissionMiddleware = require("../middlewares/permissionMiddleware");
const {
  createAssignRoleToUser,
  getAllAssignRolesToUser,
  getAssignRoleToUserById,
  updateAssignRoleToUser,
  deleteAssignRoleToUser,
} = require("../controllers/assignRolesToUserController");
const {
  validateAssignRoleCreation,
  validateAssignRoleUpdate,
  validateAssignRoleId,
} = require("../validation/assignRolesToUserValidation");

router.post("/",authMiddleware, permissionMiddleware("assign_roles"), validateAssignRoleCreation, createAssignRoleToUser);
router.get("/", authMiddleware, permissionMiddleware("view_assign_roles"), getAllAssignRolesToUser);
router.get("/:assignRolesToUserId", authMiddleware, permissionMiddleware("view_assign_roles"), validateAssignRoleId, getAssignRoleToUserById);
router.put("/:assignRolesToUserId", authMiddleware, permissionMiddleware("edit_assign_roles"), validateAssignRoleId, validateAssignRoleUpdate, updateAssignRoleToUser);
router.delete("/:assignRolesToUserId", authMiddleware, permissionMiddleware("delete_assign_roles"), validateAssignRoleId, deleteAssignRoleToUser);

module.exports = router;
