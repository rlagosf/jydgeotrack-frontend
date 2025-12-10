import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import About from "./components/About";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },            // Ruta "/"
        { path: "servicios", element: <Services /> },
        { path: "contacto", element: <Contact /> },
        { path: "nosotros", element: <About /> },
      ],
    },
  ],
  {
    basename: "/jydgeotrack-frontend", // 👈 ESTE ES EL CAMBIO CLAVE
  }
);
