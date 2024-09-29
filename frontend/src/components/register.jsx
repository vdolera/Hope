import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link

const Register = () => {
    const [name, setName] = useState(""); // Ensure this is used
    const [email, setEmail] = useState(""); // Ensure this is used
    const [password, setPassword] = useState(""); // Ensure this is used

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://hope-server-ten.vercel.app/register', { name, email, password })
            .then(result => {
                console.log(result); // Log result or handle as needed
            })
            .catch(err => {
                console.log(err); // Handle errors
            });
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name} // Bind the input value to state
                        onChange={(e) => setName(e.target.value)} // Update state on change
                        required
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;
