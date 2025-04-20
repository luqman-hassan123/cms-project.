const express = require("express");
const router = express.Router();

const {
  createPermission,
  getAllPermissions,
  getPermissionById,
  updatePermission,
  deletePermission,
} = require("../controllers/permissionController");

const {
  validatePermissionCreation,
  validatePermissionId,
  validatePermissionUpdate,
} = require("../validation/permissionValidation");

router.post("/", validatePermissionCreation, createPermission);
router.get("/", getAllPermissions);
router.get("/:permissionId", validatePermissionId, getPermissionById);
router.put("/:permissionId", validatePermissionUpdate, updatePermission);
router.delete("/:permissionId", validatePermissionId, deletePermission);

module.exports = router;
