import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import App from "./App.tsx";
import "./assets/css/index.css";

// Paginas
import { Home } from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { PruebaApi } from "./pages/PruebaApi.tsx";
import { Productos } from "./pages/Productos.tsx";
import { Login } from "./pages/Login.tsx";
import { Nosotros } from "./pages/Nosotros.tsx";
import { Registro } from "./pages/Registro.tsx";
import { Blogs } from "./pages/Blogs.tsx";
import Contacto from "./pages/Contacto.tsx";
import { SingingCat } from "./pages/SingingCat.tsx";

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