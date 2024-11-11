import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import Portafolio from "../components/portafolio/Portafolio";
import Servicios from "../components/servicios/servicios";
import Contacto from "../components/contacto/Contacto";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
