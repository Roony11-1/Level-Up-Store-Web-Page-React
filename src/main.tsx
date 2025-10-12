import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import App from "./App.tsx";
import "./assets/css/index.css";

// Paginas principales
import { Home } from "./pages/home";
import { NotFound } from "./pages/NotFound";
import { PruebaApi } from "./pages/PruebaApi";
import { Productos } from "./pages/Productos";
import { Login } from "./pages/Login";
import { Nosotros } from "./pages/Nosotros";
import { Registro } from "./pages/Registro";
import { Blogs } from "./pages/Blogs";
import { Contacto } from "./pages/Contacto";
import { SingingCat } from "./pages/SingingCat";

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
          <Route path="blogs" element={<Blogs />} />
          <Route path="registrarse" element={<Registro />} />
          <Route path="*" element={<NotFound />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path='/contactos' element={<Contacto/>}/>
          <Route path="gato" element={<SingingCat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);