import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/useAuth.js";

export default function Navbar() {
  const { isAuth, logout, user } = useAuth();
  const navigate = useNavigate();

  const goLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  // Clase activa para NavLink con Bootstrap
  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to={isAuth ? "/app" : "/login"}>
          React Router
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuth ? (
              <>
                <li className="nav-item">
                  <NavLink end to="/app" className={linkClass}>
                    Inicio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/app/blog" className={linkClass}>
                    Blog
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink to="/login" className={linkClass}>
                  Login
                </NavLink>
              </li>
            )}
          </ul>

          {isAuth && (
            <div className="d-flex align-items-center gap-2">
              <span className="navbar-text text-light small">
                Hola {user?.name ?? "usuario"}
              </span>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={goLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
