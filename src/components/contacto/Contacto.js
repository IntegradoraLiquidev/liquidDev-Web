import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Menu from "../Menu";
import Formulario from "./Formulario";

import Mapa from "./Mapa";

import Footer from "../Footer";

class Contacto extends React.Component {
  render() {
    return (
      <>
        <header id="header">
          <Menu />
        </header>
        <section id="contact" className="block contact-block">
          <Container>
            <h1 className="mb-5" data-aos="fade-right" data-aos-delay="60">
              Contactanos
            </h1>
            <Row>
              <Col mb={6}>
                <Formulario />
              </Col>
              <Col mb={6}>
                <Mapa />
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </>
    );
  }
}

export default Contacto;
