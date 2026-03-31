const express = require("express");
const router = express.Router();

const {
  calculatePerformance,
  assignStar
} = require("../controllers/performanceController");

router.get("/", calculatePerformance);
router.post("/assign-star", assignStar);

module.exports = router;