import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

// Paginas
import { Index } from "./pages/Index.tsx";

// Componente para manejar rutas no encontradas
function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Página no encontrada</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);