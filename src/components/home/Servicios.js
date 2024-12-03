import React from "react";
//import './Slider.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import imagen from "../../assets/imagenes/service-1.jpg";
import imagen2 from "../../assets/imagenes/service-2.jpg";

import imagen3 from "../../assets/imagenes/service-3.jpg";

class Servicios extends React.Component {
  render() {
    return (
      <section id="services" className="block services-block">
        <Container fluid>
          <div className="title-holder" data-aos="fade-up" data-aos-delay="50">
            <h2>Nuestros Servicios</h2>
            <div className="subtitle" data-aos="fade-up" data-aos-delay="60">
              Servicios que Proveemos
            </div>
          </div>
          <Row>
            <Col
              sm={4}
              className="holder"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              <Image src={imagen} />
              <h3>Desarrollo de Aplicaciones Móviles Personalizadas</h3>
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
            </Col>
            <Col
              sm={4}
              className="holder"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <Image src={imagen2} />
              <h3>Desarrollo de Aplicaciones Web</h3>
              <p>
                Transformamos tus ideas en aplicaciones web robustas, escalables
                y fáciles de usar. Nos especializamos en crear soluciones
                optimizadas para ofrecer una experiencia fluida en cualquier
                dispositivo y navegador. Con diseños atractivos y un enfoque en
                la funcionalidad, nuestras aplicaciones web están diseñadas para
                satisfacer las demandas de usuarios y empresas en un entorno
                digital competitivo.
              </p>
            </Col>
            <Col
              sm={4}
              className="holder"
              data-aos="fade-up"
              data-aos-delay="70"
            >
              <Image src={imagen3} />
              <h3>Automatización de Procesos Empresariales</h3>
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Servicios;
