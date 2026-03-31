const Employee = require("../models/Employee");
const Attendance = require("../models/Attendance");
const Commission = require("../models/Commission");

// Calculate performance
exports.calculatePerformance = async (req, res) => {
  try {
    const employees = await Employee.find();

    let results = [];

    for (let emp of employees) {
      // count attendance
      const attendanceCount = await Attendance.countDocuments({
        employeeId: emp._id,
        status: "present",
      });

      // sum commission
      const commissionData = await Commission.aggregate([
        { $match: { employeeId: emp._id } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]);

      const totalCommission = commissionData[0]?.total || 0;

      // score logic
      const score = (attendanceCount * 2) + (totalCommission / 100);

      results.push({
        employee: emp.name,
        attendance: attendanceCount,
        commission: totalCommission,
        score,
        id: emp._id
      });
    }

    // sort highest score first
    results.sort((a, b) => b.score - a.score);

    res.json(results);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignStar = async (req, res) => {
  try {
    const employees = await Employee.find();

    let bestEmployee = null;
    let bestScore = -1;

    for (let emp of employees) {
      const attendanceCount = await Attendance.countDocuments({
        employeeId: emp._id,
        status: "present",
      });

      const commissionData = await Commission.aggregate([
        { $match: { employeeId: emp._id } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ]);

      const totalCommission = commissionData[0]?.total || 0;

      const score = (attendanceCount * 2) + (totalCommission / 100);

      if (score > bestScore) {
        bestScore = score;
        bestEmployee = emp;
      }
    }

    if (!bestEmployee) {
      return res.json({ message: "No employees found" });
    }

    // add star (max 5)
    if (bestEmployee.stars < 5) {
      bestEmployee.stars += 1;
      await bestEmployee.save();
    }

    res.json({
      message: "Star assigned ⭐",
      employee: bestEmployee.name,
      stars: bestEmployee.stars,
      reward: bestEmployee.stars === 5 ? "🎁 Eligible for reward!" : null
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};