import { Link } from "react-router-dom";
import { useAuth } from "../contexts/useAuth.js";

export default function Home() {
  const { user } = useAuth(); // viene de tu contexto
  const nombre = user?.name || "Usuario";

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Inicio</h5>
            </div>
            <div className="card-body">
              <h4 className="card-title mb-2">¡Hola, {nombre}!</h4>
              <p className="card-text text-muted">
                Bienvenido. Esta es tu página inicial después de iniciar sesión.
              </p>

              <ul className="list-unstyled mb-3">
                <li className="mb-1">• Aquí puedes colocar accesos rápidos.</li>
                <li className="mb-1">• Resumen de actividad o alertas.</li>
                <li className="mb-1">• Enlaces a módulos clave.</li>
              </ul>

              <div className="d-flex gap-2">
                <Link to="/app/blog" className="btn btn-outline-primary">
                  Ir al Blog
                </Link>
                <Link to="/app" className="btn btn-primary">
                  Recargar Inicio
                </Link>
              </div>
            </div>
            <div className="card-footer text-muted small">
              Sesión activa como: <b>{user?.email ?? nombre}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
