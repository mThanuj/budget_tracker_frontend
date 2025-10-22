import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" Component={LoginPage} />
                <Route path="/dashboard" Component={DashboardPage} />
            </Routes>
        </Router>
    );
};

export default App;
