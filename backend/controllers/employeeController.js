const Employee = require("../models/Employee");
// Add Employee
exports.addEmployee = async (req, res) => {
  try {
    const { name, role, salaryPerDay } = req.body;

    const employee = new Employee({
      name,
      role,
      salaryPerDay,
    });

    await employee.save();

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};