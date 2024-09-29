// src/components/Register.js
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    axios.post('https://hope-server-ten.vercel.app/register', { name, email, password })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-white p-3 rounded w-25">
      <h2>Register</h2>
      <form onSubmit={handleRegisterSubmit}>
        <div className="mb-3">
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            className="form-control rounded-0"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
      </form>
    </div>
  );
}

export default Register;
