import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import App from "./App.tsx";
import "./assets/css/index.css";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="app" element={<App />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);