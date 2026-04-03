import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Commission from "./pages/Commission";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="p-6 bg-slate-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/commission" element={<Commission />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;