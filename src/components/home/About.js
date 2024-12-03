import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../../assets/imagenes/nosotros.png";
import ProgressBar from "react-bootstrap/ProgressBar";

function About() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder" data-aos="fade-up" data-aos-delay="60">
          <h2>Sobre Nosotros</h2>
          <div className="subtitle" data-aos="fade-up" data-aos-delay="60">
            Aprende Algo Mas Sobre Nosotros
          </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} data-aos="fade-up" data-aos-delay="50" />
          </Col>
          <Col sm={6}>
            <p data-aos="fade-up" data-aos-delay="60">
              En LiquidDev , nos apasiona transformar ideas en soluciones
              tecnológicas que impulsen el crecimiento y la innovación. Somos un
              equipo de expertos comprometidos con ofrecer servicios de alta
              calidad en desarrollo de aplicaciones móviles, desarrollo web y
              automatización de procesos empresariales.
            </p>
            <p data-aos="fade-up" data-aos-delay="60">
              Nuestro enfoque combina creatividad, tecnología de punta y un
              entendimiento profundo de las necesidades de nuestros clientes
              para entregar resultados que superen expectativas. Creemos en
              construir relaciones a largo plazo basadas en confianza,
              transparencia y un compromiso genuino con el éxito de cada
              proyecto.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Vitae alias ex error distinctio laudantium recusandae, iure. Vel
              nisi soluta, minus consectetur reiciendis laborum, laudantium
              perspiciatis quos molestias quam eum.
            </p>
            <p data-aos="fade-up" data-aos-delay="60">
              Más que un proveedor, queremos ser tu aliado estratégico en el
              camino hacia la transformación digital. ¡Juntos podemos llevar tu
              negocio al siguiente nivel!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
