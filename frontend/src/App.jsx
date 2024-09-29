import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change here
import Register from "./components/register"; // Ensure the casing matches
import Login from "./components/login"; // Ensure the casing matches

const App = () => {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/register" element={<Register />} /> {/* New syntax */}
                <Route path="/login" element={<Login />} /> {/* New syntax */}
            </Routes>
        </Router>
    );
};

export default App;
