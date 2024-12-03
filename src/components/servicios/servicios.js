import React from "react";

import Menu from "../Menu";

import Footer from "../Footer";
import Card from "react-bootstrap/Card";

import imagen from "../../assets/imagenes/service-1.jpg";
import imagen2 from "../../assets/imagenes/service-2.jpg";

import imagen3 from "../../assets/imagenes/service-3.jpg";
import imagen4 from "../../assets/imagenes/service-4.jpg";
import imagen5 from "../../assets/imagenes/service-5.png";

import imagen6 from "../../assets/imagenes/service-6.png";

class Servicios extends React.Component {
  render() {
    return (
      <>
        <header id="header">
          <Menu />
        </header>
        <main role="main" className="flex-shrink-0 mt-5">
          <section className="text-center block">
            <div className="container">
              <h1
                className="jumbotron-heading"
                data-aos="flip-up"
                data-aos-delay="50"
              >
                Servicios{" "}
              </h1>
              <p
                className="lead text-muted"
                data-aos="fade-up"
                data-aos-delay="70"
              >
                A continuación los servicios
              </p>
            </div>
          </section>
          <section id="services" className="services-block">
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen} />
                      <div className="card-body">
                        <Card.Title>
                          Desarrollo de Aplicaciones Móviles Personalizadas
                        </Card.Title>
                        <Card.Body className="text-secondary">
                          Creamos aplicaciones móviles únicas y adaptadas a las
                          necesidades específicas de tu negocio o proyecto.
                          Desde el diseño intuitivo de interfaces hasta
                          funcionalidades avanzadas, garantizamos que tu
                          aplicación destaque en cualquier plataforma (iOS,
                          Android o multiplataforma). Nuestro enfoque combina
                          metodologías ágiles y tecnologías modernas para
                          entregar soluciones rápidas, seguras y de alto
                          rendimiento que impulsen tu éxito en el mundo móvil.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="60"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen2} />
                      <div className="card-body">
                        <Card.Title>Desarrollo de Aplicaciones Web</Card.Title>
                        <Card.Body className="text-secondary">
                          Transformamos tus ideas en aplicaciones web robustas,
                          escalables y fáciles de usar. Nos especializamos en
                          crear soluciones optimizadas para ofrecer una
                          experiencia fluida en cualquier dispositivo y
                          navegador. Con diseños atractivos y un enfoque en la
                          funcionalidad, nuestras aplicaciones web están
                          diseñadas para satisfacer las demandas de usuarios y
                          empresas en un entorno digital competitivo.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="70"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen3} style={{ height: 150 }} />
                      <div className="card-body">
                        <Card.Title>
                          Automatización de Procesos Empresariales
                        </Card.Title>
                        <Card.Body className="text-secondary">
                          Optimiza la eficiencia de tu empresa con soluciones
                          personalizadas de automatización. Implementamos
                          tecnologías avanzadas para transformar tareas
                          repetitivas en procesos rápidos y precisos, reduciendo
                          costos y errores. Desde la integración de sistemas
                          hasta flujos de trabajo automatizados, nuestras
                          soluciones están diseñadas para mejorar la
                          productividad, liberar recursos y permitirte enfocarte
                          en lo que realmente importa: el crecimiento de tu
                          negocio.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="50"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen4} style={{ height: 150 }} />
                      <div className="card-body">
                        <Card.Title>Consultoria de Sistemas</Card.Title>
                        <Card.Body className="text-secondary">
                          Impulsa la transformación digital de tu empresa con
                          nuestra consultoría de sistemas. Evaluamos, diseñamos
                          e implementamos soluciones tecnológicas alineadas a
                          tus objetivos estratégicos. Desde la optimización de
                          infraestructuras hasta la integración de tecnologías
                          emergentes, te ayudamos a maximizar la eficiencia
                          operativa, reducir costos y mejorar la toma de
                          decisiones. Nuestro enfoque personalizado garantiza
                          que cada solución esté adaptada a las necesidades
                          únicas de tu negocio.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="60"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen5} style={{ height: 150 }} />
                      <div className="card-body">
                        <Card.Title>Integración de API's</Card.Title>
                        <Card.Body className="text-secondary">
                          Conecta tus sistemas y optimiza la funcionalidad de
                          tus aplicaciones mediante la integración de API's.
                          Facilitamos la comunicación entre plataformas y
                          servicios, permitiendo automatizar procesos, acceder a
                          datos en tiempo real y mejorar la experiencia del
                          usuario. Ya sea integrando servicios de terceros o
                          desarrollando API's personalizadas, garantizamos
                          conexiones seguras, eficientes y adaptadas a las
                          necesidades de tu negocio.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-4 holder"
                    data-aos="fade-up"
                    data-aos-delay="70"
                  >
                    <div className="card mb-4 shadow-sm">
                      <img src={imagen6} style={{ height: 150 }} />
                      <div className="card-body">
                        <Card.Title>Soporte Tecnio y Mantenimiento</Card.Title>
                        <Card.Body className="text-secondary">
                          Mantén tus sistemas funcionando de manera óptima con
                          nuestro servicio de soporte técnico y mantenimiento.
                          Nos encargamos de resolver incidencias, realizar
                          actualizaciones y asegurar el desempeño continuo de
                          tus aplicaciones, sistemas y plataformas. Nuestro
                          equipo de expertos está disponible para brindar
                          soluciones rápidas y efectivas, permitiendo que te
                          enfoques en lo más importante: hacer crecer tu negocio
                          sin interrupciones.
                        </Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Leer
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
  }
}

export default Servicios;
