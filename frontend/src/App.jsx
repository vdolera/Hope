import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./register"; // Import your Register component
import Login from "./login"; // Import your Login component

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/" exact>
                    <Redirect to="/login" /> {/* Default redirect to login */}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
