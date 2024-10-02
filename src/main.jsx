import "./index.css";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routers.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
