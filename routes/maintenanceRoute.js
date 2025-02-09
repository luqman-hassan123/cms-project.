const express = require("express");
const {
  createMaintenance,
  getMaintenances,
  getMaintenanceById,
  updateMaintenance,
  deleteMaintenance,
} = require("../controllers/maintenanceController");
const {
  validateMaintenanceCreation,
  validateMaintenanceUpdate,
  validateMaintenanceId,
} = require("../validation/maintenanceValidation");
const router = express.Router();

router.post("/", validateMaintenanceCreation, createMaintenance);
router.get("/", getMaintenances);
router.get("/:maintenanceId", validateMaintenanceId, getMaintenanceById);
router.put("/:maintenanceId", validateMaintenanceUpdate, updateMaintenance);
router.delete("/:maintenanceId", validateMaintenanceId, deleteMaintenance);

module.exports = router;
