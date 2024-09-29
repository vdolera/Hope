// src/components/Login.js
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('https://hope-server-ten.vercel.app/login', { email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-white p-3 rounded w-25">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
      </form>
    </div>
  );
}

export default Login;
