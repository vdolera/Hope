// src/App.js
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/register';
import Login from './components/login';
import Home from './components/Home'; // Import the Home component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [isRegister, setIsRegister] = useState(true);  // Toggle between Register and Login
  const [user, setUser] = useState(null); // State to store user info

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set user data on successful login
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
          {isRegister ? <Register /> : <Login onLoginSuccess={handleLoginSuccess} />}
          <div className="text-center mt-3">
            <p>{isRegister ? 'Already have an account?' : "Don't have an account?"}</p>
            <button
              className="btn btn-default border bg-light rounded-0 text-decoration-none"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Login' : 'Register'}
            </button>
          </div>
        </div>} />
      </Routes>
    </Router>
  );
}

export default App;
