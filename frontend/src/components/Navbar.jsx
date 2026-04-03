import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-800 text-white shadow-md">
      
      <h1 className="text-xl font-bold">StaffSync</h1>

      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-yellow-400 transition-all duration-300">Dashboard</Link>
        <Link to="/employees" className="hover:text-yellow-400 transition-all duration-300">Employees</Link>
        <Link to="/attendance" className="hover:text-yellow-400 transition-all duration-300">Attendance</Link>
        <Link to="/commission" className="hover:text-yellow-400 transition-all duration-300">Commission</Link>
      </div>

    </div>
  );
}

export default Navbar;