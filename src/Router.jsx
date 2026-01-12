import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const basename =
  import.meta.env.MODE === "development"
    ? "/"
    : "/jydgeotrack-frontend";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <App />,
    },
  ],
  {
    basename,
  }
);

