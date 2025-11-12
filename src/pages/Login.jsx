import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.js";
import { PRIVATE } from "../config/router/paths.js";
import Swal from "sweetalert2";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || PRIVATE;

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const OK_EMAIL = "Yael";
    const OK_PASS = "123456";

    if (form.email === OK_EMAIL && form.password === OK_PASS) {
      // guarda sesión
      login({
        token: "STATIC-TOKEN",
        user: { id: 1, name: "Admin", email: OK_EMAIL },
        role: "admin",
      });

      // alerta de éxito y luego navega
      await Swal.fire({
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        confirmButtonText: "Entrar",
        allowOutsideClick: false,
      });

      navigate(from, { replace: true });
    } else {
      setError("Credenciales incorrectas");
      Swal.fire({
        title: "Ups",
        text: "Usuario o contraseña inválidos",
        icon: "error",
        confirmButtonText: "Entendido",
      });
    }
  };

  return (
    <div className="container py-4" style={{ maxWidth: 420 }}>
      <h2 className="mb-3">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={onSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Usuario o email
          </label>
          <input
            id="email"
            className="form-control"
            type="text"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Yaellopezmariano"
            autoComplete="username"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            className="form-control"
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm((f) => ({ ...f, password: e.target.value }))
            }
            placeholder="123456"
            autoComplete="current-password"
            required
          />
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
