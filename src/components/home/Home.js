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
      <Terms />
      <header id="header">
        <Menu />
      </header>

      <main>
        <Slider />
        <About />
        <Servicios />
      </main>

      <Footer />
    </>
  );
}

export default Home;
