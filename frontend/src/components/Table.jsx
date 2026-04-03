function Table({ data }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-6 overflow-x-auto">
      <h2 className="text-lg font-bold mb-4">Leaderboard</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            <th>Attendance</th>
            <th>Commission</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-slate-50 ${
                index === 0 ? "bg-yellow-100 font-bold" : ""
              }`}
            >
              <td>{emp.employee}</td>
              <td>{emp.attendance}</td>
              <td>₹{emp.commission}</td>
              <td>{emp.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;