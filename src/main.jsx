import {BrowserRouter, Routes, Route} from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Productos from "./pages/Productos.jsx";
import Producto from "./pages/Producto.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/productos" element={<Productos/>}/>
      <Route path="/producto" element={<Producto/>}/>
    </Routes>
  </BrowserRouter>
)
