import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateTicket from './components/createTicket';
import Tickets from './components/Ticketlist';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notification';
import Logout from './components/Logout';
import PrivateRoute from './components/Protected';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="flex">
        {token && <Sidebar />}
        <div className="flex-grow p-4">
          <Routes>
            <Route 
              path="/login" 
              element={<Login setToken={setToken} />} 
            />
            <Route
              path="/register"
              element={token ? <PrivateRoute component={Register} /> : <Navigate to="/login" />}
            />
            <Route
              path="/create-ticket"
              element={token ? <PrivateRoute component={CreateTicket} /> : <Navigate to="/login" />}
            />
            <Route
              path="/tickets"
              element={token ? <PrivateRoute component={Tickets} /> : <Navigate to="/login" />}
            />
            <Route
              path="/notifications"
              element={token ? <PrivateRoute component={Notifications} /> : <Navigate to="/login" />}
            />
            <Route
              path="/logout"
              element={token ? <PrivateRoute component={Logout} /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={token ? <Navigate to="/create-ticket" /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
