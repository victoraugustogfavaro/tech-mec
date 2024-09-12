import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/index.tsx";
import SobreNos from "./routes/SobreNos/index.tsx";
import Participantes from "./routes/Participantes/index.tsx";
import Error from "./routes/Error/index.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre-nos", element: <SobreNos /> },
      { path: "/participantes", element: <Participantes /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
