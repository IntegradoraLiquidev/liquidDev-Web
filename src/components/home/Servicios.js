import React from "react";
//import './Slider.css';

import imagen from "../../assets/imagenes/img-1.jpg";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
class Servicios extends React.Component {
  render() {
    return (
      <section id="services" className="block services-block">
        <Container>
          <div className="title-holder">
            <h2>Servicios</h2>
            <div className="subtitle">Algunos de nuestros Servicios</div>
          </div>
          <Row>
            <Col sm={4} className="holder">
              <Image src={imagen} rounded />
              <h2>Desarrollo de Aplicaciones Móviles Personalizadas</h2>
              <p>
                Creamos aplicaciones móviles únicas y adaptadas a las
                necesidades específicas de tu negocio o proyecto. Desde el
                diseño intuitivo de interfaces hasta funcionalidades avanzadas,
                garantizamos que tu aplicación destaque en cualquier plataforma
                (iOS, Android o multiplataforma). Nuestro enfoque combina
                metodologías ágiles y tecnologías modernas para entregar
                soluciones rápidas, seguras y de alto rendimiento que impulsen
                tu éxito en el mundo móvil.
              </p>
              <p>
                <a className="btn btn-primary" href="/servicios" role="button">
                  Leer más &raquo;
                </a>
              </p>
            </Col>
            <Col sm={4} className="holder">
              <Image src={imagen} rounded />
              <h2>Desarrollo de aplicaciones Web</h2>
              <p>
                Transformamos tus ideas en aplicaciones web robustas, escalables
                y fáciles de usar. Nos especializamos en crear soluciones
                optimizadas para ofrecer una experiencia fluida en cualquier
                dispositivo y navegador. Con diseños atractivos y un enfoque en
                la funcionalidad, nuestras aplicaciones web están diseñadas para
                satisfacer las demandas de usuarios y empresas en un entorno
                digital competitivo.
              </p>
              <p>
                <a className="btn btn-primary" href="/servicios" role="button">
                  Leer más &raquo;
                </a>
              </p>
            </Col>
            <Col sm={4} className="holder">
              <Image src={imagen} rounded />
              <h2>Automatización de Procesos Empresariales</h2>
              <p>
                Optimiza la eficiencia de tu empresa con soluciones
                personalizadas de automatización. Implementamos tecnologías
                avanzadas para transformar tareas repetitivas en procesos
                rápidos y precisos, reduciendo costos y errores. Desde la
                integración de sistemas hasta flujos de trabajo automatizados,
                nuestras soluciones están diseñadas para mejorar la
                productividad, liberar recursos y permitirte enfocarte en lo que
                realmente importa: el crecimiento de tu negocio.
              </p>
              <p>
                <a className="btn btn-primary" href="/servicios" role="button">
                  Leer más &raquo;
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Servicios;
