const express = require("express");
const router = express.Router();

const {
  addCommission,
  getCommission,
} = require("../controllers/commissionController");

router.post("/", addCommission);
router.get("/", getCommission);

module.exports = router;