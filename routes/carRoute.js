const express = require("express");
const router = express.Router();
const {
  createCarHandler,
  getCarsHandler,
  getCarByIdHandler,
  updateCarHandler,
  deleteCarHandler,
} = require("../controllers/carController");
const {
  validateCarCreation,
  validateCarId,
  validateCarUpdate,
} = require("../validation/carValidation");

router.post("/", validateCarCreation, createCarHandler);
router.get("/", getCarsHandler);
router.get("/:carId", validateCarId, getCarByIdHandler);
router.put("/:carId", validateCarUpdate, updateCarHandler);
router.delete("/:carId", validateCarId, deleteCarHandler);

module.exports = router;
