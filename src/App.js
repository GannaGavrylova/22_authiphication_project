import "./App.css";
import Register from "./pages/register";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login/index";
import Profile from "./pages/profile/index";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div className="App">
      <nav
        style={{
          display: "flex",
          gap: "15px",
          backgroundColor: "teal",
          color: "white",
        }}
      >
        <Link to="/">Home </Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
