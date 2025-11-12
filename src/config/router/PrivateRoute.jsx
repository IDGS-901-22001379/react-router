import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth.js";
import { LOGIN } from "./paths.js";

export default function PrivateRoute() {
  const { isAuth } = useAuth();
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={LOGIN} replace state={{ from: location }} />
  );
}
