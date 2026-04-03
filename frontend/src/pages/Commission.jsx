import { useState, useEffect } from "react";
import API from "../services/api";

function Commission() {
  const [amount, setAmount] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const addCommission = async () => {
    await API.post("/commission", {
      employeeId,
      amount,
      date: new Date(),
    });
    alert("Commission added");
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Commission</h1>

      <div className="bg-white p-6 rounded-xl shadow-md">
        
        <select
          onChange={(e) => setEmployeeId(e.target.value)}
          className="border p-2 mr-2"
        >
          <option>Select Employee</option>
          {employees.map((emp) => (
            <option key={emp._id} value={emp._id}>
              {emp.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 mr-2"
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          onClick={addCommission}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>

      </div>
    </div>
  );
}

export default Commission;