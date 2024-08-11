import { NavLink } from 'react-router-dom';
import { FaPlus, FaTicketAlt, FaSignOutAlt } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-6 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center mb-8">
          <img 
            src="https://vivlia.co.za/wp-content/uploads/2023/07/Vivlia-Logo.png" 
            alt="Logo" 
            className="h-16 w-auto" 
          />
        </div>
        <h2 className="text-center text-3xl font-semibold mb-8">Dashboard</h2>
        <nav className="space-y-6">
          <NavLink 
            to="/create-ticket" 
            className="flex items-center space-x-3 p-4 rounded-lg text-lg font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaPlus className="text-white text-xl" />
            <span>Create Ticket</span>
          </NavLink>
          <NavLink 
            to="/tickets" 
            className="flex items-center space-x-3 p-4 rounded-lg text-lg font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaTicketAlt className="text-white text-xl" />
            <span>Tickets</span>
          </NavLink>
          <NavLink 
            to="/logout" 
            className="flex items-center space-x-3 p-4 rounded-lg text-lg font-medium bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
          >
            <FaSignOutAlt className="text-white text-xl" />
            <span>Logout</span>
          </NavLink>
        </nav>
      </div>
      
    </div>
  );
}
