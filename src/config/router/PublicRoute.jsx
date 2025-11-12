import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth.js";
import { PRIVATE } from "./paths.js";

export default function PublicRoute() {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to={PRIVATE} replace /> : <Outlet />;
}
