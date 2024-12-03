import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/imagenes/portafolio-1.png";
import img2 from "../../assets/imagenes/portafolio-2.png";
import img3 from "../../assets/imagenes/portafolio-3.jpg";

import Menu from "../Menu";
import Footer from "../Footer";

export default function Portfolio() {
  return (
    <>
      <header id="header">
        <Menu />
      </header>
      <section id="works" className="mt-5 block works-block">
        <Container fluid>
          <div className="title-holder">
            <h2>Nuestro Trabajo</h2>
            <div className="subtitle">Nuestro Increible Trabajo</div>
          </div>
          <Row className="portfoliolist">
            <Col sm={4}>
              <div className="portfolio-wrapper">
                <a href="#">
                  <Image src={img1} />
                  <div className="label text-center">
                    <h3>Aplicacion Movil Medics Ruecas</h3>
                    <p>Gestion de inventarios</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className="portfolio-wrapper">
                <a href="#">
                  <Image src={img2} />
                  <div className="label text-center">
                    <h3>App Comercial MiChuy</h3>
                    <p>Gestion de Pedidos</p>
                  </div>
                </a>
              </div>
            </Col>
            <Col sm={4}>
              <div className="portfolio-wrapper">
                <a href="#">
                  <Image src={img3} />
                  <div className="label text-center">
                    <h3>Promocional DiCTSA</h3>
                    <p>App web Promocional </p>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
