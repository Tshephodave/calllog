import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('/notifications', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setNotifications(response.data.notifications);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((notification, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md shadow-sm">
              {notification.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
