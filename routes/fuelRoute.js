const express = require("express");
const {
  createFuel,
  getFuels,
  getFuelById,
  updateFuel,
  deleteFuel,
} = require("../controllers/fuelController");
const {
  validateFuelCreation,
  validateFuelUpdate,
  validateFuelId,
} = require("../validation/fuelValidation");
const router = express.Router();

router.post('/', validateFuelCreation, createFuel);
router.get("/", getFuels);
router.get("/:fuelId", validateFuelId, getFuelById);
router.put("/:fuelId", validateFuelUpdate, updateFuel);
router.delete("/:fuelId", validateFuelId, deleteFuel);

module.exports = router;
