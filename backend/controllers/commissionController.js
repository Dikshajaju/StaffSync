const Commission = require("../models/Commission");

// Add Commission
exports.addCommission = async (req, res) => {
  try {
    const { employeeId, amount, date } = req.body;

    const commission = new Commission({
      employeeId,
      amount,
      date,
    });

    await commission.save();

    res.status(201).json(commission);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Commission
exports.getCommission = async (req, res) => {
  try {
    const data = await Commission.find().populate("employeeId", "name");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};