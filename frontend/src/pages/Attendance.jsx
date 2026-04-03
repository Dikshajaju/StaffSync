import { useState, useEffect } from "react";
import API from "../services/api";

function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [employeeId, setEmployeeId] = useState("");

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  const markAttendance = async () => {
    await API.post("/attendance", {
      employeeId,
      date: new Date(),
      status: "present",
    });
    alert("Marked");
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Attendance</h1>

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

        <button
          onClick={markAttendance}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Mark Present
        </button>

      </div>
    </div>
  );
}

export default Attendance;