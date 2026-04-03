import { useEffect, useState } from "react";
import API from "../services/api";
import Card from "../components/Card";
import Table from "../components/Table";

function Dashboard() {
  const [data, setData] = useState([]);

  const fetchPerformance = async () => {
    const res = await API.get("/performance");
    setData(res.data);
  };

  useEffect(() => {
    fetchPerformance();
  }, []);

  const topEmployee = data[0];

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>{new Date().toLocaleDateString()}</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="⭐ Star Performer"
          value={topEmployee ? topEmployee.employee : "-"}
        />
        <Card title="👥 Employees" value={data.length} />
        <Card
          title="💰 Total Commission"
          value={
            "₹" +
            data.reduce((sum, emp) => sum + emp.commission, 0)
          }
        />
      </div>

      {/* Table */}
      <Table data={data} />
    </div>
  );
}

export default Dashboard;