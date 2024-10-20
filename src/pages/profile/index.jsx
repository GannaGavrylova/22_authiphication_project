import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogaut() {
    dispatch(logout());
    navigate("/login");
  }

  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;
  if (!tokenData) return <h1>Login into account</h1>;
  return (
    <div>
      <h1>{tokenData && tokenData.user.id}</h1>
      <button onClick={handleLogaut}>Logout</button>
    </div>
  );
}

export default Profile;
