import React from "react";
import Menu from "../Menu";
import Slider from "./Slider";
import Servicios from "./Servicios";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Menu />
      <div className="container">
        <Slider />
        <Servicios />
        <hr className="featurette-divider" />
      </div>
      <Footer />
    </>
  );
}

export default Home;
