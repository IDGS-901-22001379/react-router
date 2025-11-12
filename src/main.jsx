import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/index.jsx";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// PWA: registra el Service Worker y notifica updates
import { registerSW } from "virtual:pwa-register";
import Swal from "sweetalert2";

registerSW({
  immediate: true,
  onNeedRefresh() {
    Swal.fire({
      title: "Actualización disponible",
      text: "Hay una nueva versión de la app.",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Actualizar ahora",
      cancelButtonText: "Después",
    }).then((res) => {
      if (res.isConfirmed) {
        // fuerza que el nuevo SW tome control y recargue
        location.reload();
      }
    });
  },
  onOfflineReady() {
    // Opcional: avisa que ya está lista para funcionar offline
    // Swal.fire({ toast:true, position:"top-end", icon:"success", title:"PWA lista para offline", timer:1500, showConfirmButton:false });
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
