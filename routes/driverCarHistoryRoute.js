const express = require("express");
const router = express.Router();
const {
    createDriverCarHistory,
    getAllDriverCarHistories,
    getDriverCarHistoryById,
    updateDriverCarHistory,
    deleteDriverCarHistory
} = require("../controllers/driverCarHistoryController");
const {
  validateCreateHistory,
  validateUpdateHistory,
  validateDriverCarHistoryId,
} = require("../validation/driverCarHistoryValidation");

router.post("/", validateCreateHistory, createDriverCarHistory);
router.get("/", getAllDriverCarHistories);
router.get("/:driverCarHistoryId", validateDriverCarHistoryId ,getDriverCarHistoryById);
router.put("/:driverCarHistoryId", validateDriverCarHistoryId, validateUpdateHistory ,updateDriverCarHistory);
router.delete("/:driverCarHistoryId", validateDriverCarHistoryId, deleteDriverCarHistory);

module.exports = router;
