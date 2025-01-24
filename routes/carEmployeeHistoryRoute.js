const express = require("express");
const router = express.Router();
const {createHistory,
    getAllHistories,
    getHistoryById,
    updateHistory,
    deleteHistory} = require("../controllers/carEmployeeHistoryController");
const{ validateCarEmployeeHistoryId,
    validateCreateHistory,
    validateUpdateHistory } = require("../validation/carEmployeeHistoryValidation");

router.post("/", validateCreateHistory ,createHistory);
router.get("/", getAllHistories);
router.get("/:carEmployeeHistoryId", validateCarEmployeeHistoryId, getHistoryById);
router.put("/:carEmployeeHistoryId", validateUpdateHistory ,updateHistory);
router.delete("/:carEmployeeHistoryId", validateCarEmployeeHistoryId, deleteHistory);

module.exports = router;
