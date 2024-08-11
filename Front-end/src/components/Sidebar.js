import { NavLink } from 'react-router-dom';
import { FaPlus, FaTicketAlt, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <NavLink to="/create-ticket" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaPlus />
            <span>Create Ticket</span>
          </NavLink>
          <NavLink to="/tickets" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaTicketAlt />
            <span>Tickets</span>
          </NavLink>
          <NavLink to="/logout" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md">
            <FaSignOutAlt />
            <span>Logout</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
