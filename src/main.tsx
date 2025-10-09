import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import App from "./App.tsx";
import "./assets/css/index.css";

// Paginas
import { Home } from "./pages/home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { PruebaApi } from "./pages/PruebaApi.tsx";
import { Productos } from "./pages/Productos.tsx";
import { Login } from "./pages/Login.tsx";
<<<<<<< HEAD
import { Nosotros } from "./pages/Nosotros.tsx";
=======
import { Registro } from "./pages/Registro.tsx";
>>>>>>> 4b0459bb4ab9987032fd2d10977c9f18706fcdc5

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="app" element={<App />} />
          <Route path="catalogo" element={<Productos />} />
          <Route path="testapi" element={<PruebaApi />} />
          <Route path="login" element={<Login />} />
          <Route path="registrarse" element={<Registro />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);