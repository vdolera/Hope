import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Login = () => {
    const [email, setEmail] = useState(""); // Ensure this is used
    const [password, setPassword] = useState(""); // Ensure this is used

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://hope-server-ten.vercel.app/login', { email, password })
            .then(response => {
                if (response.data === "Login successful") {
                    // Handle successful login, e.g., redirect or update state
                } else {
                    alert(response.data); // Show error message
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email} // Bind the input value to state
                        onChange={(e) => setEmail(e.target.value)} // Update state on change
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password} // Bind the input value to state
                        onChange={(e) => setPassword(e.target.value)} // Update state on change
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;
