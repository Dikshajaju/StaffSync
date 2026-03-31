const Attendance = require("../models/Attendance");

// Mark Attendance
exports.markAttendance = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    // prevent duplicate entry
    const existing = await Attendance.findOne({ employeeId, date });

    if (existing) {
      return res.status(400).json({ message: "Attendance already marked" });
    }

    const attendance = new Attendance({
      employeeId,
      date,
      status,
    });

    await attendance.save();

    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all attendance
exports.getAttendance = async (req, res) => {
  try {
    const data = await Attendance.find().populate("employeeId", "name");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};