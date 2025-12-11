import { createBrowserRouter } from "react-router-dom";
import App from "./App";

// Router minimalista para landing page
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    // Wildcard: cualquier otra ruta también muestra la landing
    {
      path: "*",
      element: <App />,
    },
  ],
  {
    basename: "/jydgeotrack-frontend", // 👈 clave para GitHub Pages
  }
);
