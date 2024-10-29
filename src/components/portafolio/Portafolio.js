import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Imagen from "../../assets/imagenes/img-1.jpg";
import Footer from "../Footer";
import Menu from "../Menu";
export default function Portafolio() {
  return (
    <>
      <header id="Menu">
        <Menu />
      </header>
      <section id="works" className="block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Nuestro Trabajo</h2>
            <div className="subtitle">Conoce acerca de nuestro Trabajo</div>
            <Row className="portfoliolist">
              <Col sm={4}>
                <div className="portfolio-wrapper">
                  <a href="#">
                    <Image src={Imagen} />
                    <div className="label text-center">
                      <h3>AplicaciónMóvil Perzonalizada</h3>
                    </div>
                  </a>
                </div>
              </Col>
              <Col sm={4}>
                <div className="portfolio-wrapper">
                  <a href="#">
                    <Image src={Imagen} />
                    <div className="label text-center">
                      <h3>Sistema Web de Finanzas</h3>
                    </div>
                  </a>
                </div>
              </Col>
              <Col sm={4}>
                <div className="portfolio-wrapper">
                  <a href="#">
                    <Image src={Imagen} />
                    <div className="label text-center">
                      <h3>Automatización Empresarial</h3>
                    </div>
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
