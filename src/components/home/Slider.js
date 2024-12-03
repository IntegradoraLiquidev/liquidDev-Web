import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import imagen from "../../assets/imagenes/img-hero1.jpg";
import imagen2 from "../../assets/imagenes/img-hero2.jpg";
import imagen3 from "../../assets/imagenes/img-hero3.jpg";

import Image from "react-bootstrap/Image";
//import './Slider.css';

class Slider extends React.Component {
  render() {
    return (
      <section id="home" className="hero-block">
        <Container>
          <Row>
            <Col>
              <Carousel>
                <Carousel.Item>
                  <img src={imagen} className="d-block w-100" />
                  <Carousel.Caption>
                    <h3>Innovación que Transforma</h3>
                    <p>
                      Desarrollamos soluciones tecnológicas personalizadas para
                      que tu negocio crezca y destaque en el mundo digital.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={imagen2} rounded />
                  <Carousel.Caption>
                    <h3>Tu Aliado Digital</h3>
                    <p>
                      Aplicaciones móviles y web que conectan con tus usuarios y
                      maximizan el impacto de tu marca.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={imagen3} rounded />
                  <Carousel.Caption>
                    <h3>Automatiza, Optimiza, Crece</h3>
                    <p>
                      Simplifica procesos empresariales y enfócate en lo que
                      realmente importa con nuestras soluciones de
                      automatización.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Slider;
