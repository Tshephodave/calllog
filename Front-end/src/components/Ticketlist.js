import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('/tickets', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setTickets(response.data.tickets);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found</p>
      ) : (
        <ul className="space-y-2">
          {tickets.map((ticket, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
              <h3 className="text-xl font-bold">{ticket.issue}</h3>
              <p>{ticket.machineDescription}</p>
              <p className="text-sm text-gray-500">Priority: {ticket.priority}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
