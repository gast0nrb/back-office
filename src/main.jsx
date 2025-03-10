import {BrowserRouter, Routes, Route} from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Productos from "./pages/Productos.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/productos" element={<Productos/>}/>
    </Routes>
  </BrowserRouter>
)
