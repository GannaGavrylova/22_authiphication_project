import { jwtDecode } from "jwt-decode";
import { logout } from "../redux/slices/authSlice";

const isTokenExpired = (token) => {
  if (!token) return true;

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  return decoded.exp < currentTime;
};

export const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  const token = store.getState().auth.token; // таким образом мы достаем токен

  if (token && isTokenExpired(token)) {
    store.dispatch(logout());
  }

  return next(action);
};
