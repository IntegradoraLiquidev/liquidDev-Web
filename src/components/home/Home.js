import React from "react";
import Menu from "../Menu";
import Slider from "./Slider";
import Servicios from "./Servicios";
import Footer from "../Footer";
import About from "./About";
import Terms from "../Terms";

function Home() {
  return (
    <>
      <header id="Menu">
        <Menu />
      </header>

      <div className="container">
        <Slider />
        <About />
        <Servicios />
        <hr className="featurette-divider" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
