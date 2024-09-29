// src/App.js
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [isRegister, setIsRegister] = useState(true);  // Toggle between Register and Login

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      {isRegister ? <Register /> : <Login />}
      <div className="text-center mt-3">
        <p>{isRegister ? 'Already have an account?' : "Don't have an account?"}</p>
        <button
          className="btn btn-default border bg-light rounded-0 text-decoration-none"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? 'Login' : 'Register'}
        </button>
      </div>
    </div>
  );
}

export default App;
