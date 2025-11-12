import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <div className="container py-5">
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error?.statusText || error?.message}</p>
      <Link to="/" className="btn btn-primary">
        Back home
      </Link>
    </div>
  );
}
