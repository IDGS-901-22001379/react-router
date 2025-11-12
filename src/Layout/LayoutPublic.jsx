import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/router/Navbar.jsx"; //  ruta correcta

export default function LayoutPublic() {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <main className="container py-3">
        {navigation.state === "loading" && (
          <div className="alert alert-info my-4">Loading...</div>
        )}
        <Outlet />
      </main>
      <footer className="text-center py-4">Hola</footer>
    </>
  );
}
