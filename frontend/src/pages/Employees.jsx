import { useState, useEffect } from "react";
import API from "../services/api";

function Employees() {
  const [name, setName] = useState("");
  const [employees, setEmployees] = useState([]);

  // Fetch employees
  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  // Add employee
  const addEmployee = async () => {
    await API.post("/employees", { name });
    setName("");
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Employees</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Employee Name"
          className="border p-2 mr-2 rounded"
        />

        <button
          onClick={addEmployee}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Employee
        </button>
      </div>

      {/* List */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        {employees.map((emp) => (
          <p key={emp._id} className="border-b py-2">
            {emp.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Employees;