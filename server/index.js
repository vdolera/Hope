const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt'); // Add bcrypt for password hashing
const RegisterModel = require('./models/Register'); // Assuming this is your User schema

const app = express();
app.use(cors({
    origin: ["https://hope-front-two.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());

mongoose.connect('mongodb+srv://vdolera:Integ2@imsu.pjwjc.mongodb.net/?retryWrites=true&w=majority&appName=IMSU');

app.get("/", (req, res) => {
    res.json("Hello");
});

// Register Route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    
    // Check if the user already exists
    RegisterModel.findOne({ email: email })
        .then(async (user) => {
            if (user) {
                return res.json("User already exists");
            } else {
                // Hash the password before saving
                const hashedPassword = await bcrypt.hash(password, 10);
                
                // Create the new user
                RegisterModel.create({ name: name, email: email, password: hashedPassword })
                    .then(result => res.json(result))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Check if the user exists
    RegisterModel.findOne({ email: email })
        .then(async (user) => {
            if (!user) {
                return res.json("User not found");
            }

            // Compare the provided password with the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (isPasswordValid) {
                res.json("Login successful");
            } else {
                res.json("Invalid email or password");
            }
        })
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
