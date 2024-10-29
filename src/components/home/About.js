import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import imagen from "../../assets/imagenes/img-1.jpg";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Sobre Nosotros</h2>
          <div className="subtitle">Aprende algo sobre Nosotros</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={imagen} rounded />
          </Col>
          <Col sm={6}>
            En LiquidDev, nos apasiona transformar ideas en soluciones
            tecnológicas que impulsen el crecimiento y la innovación. Somos un
            equipo de expertos comprometidos con ofrecer servicios de alta
            calidad en desarrollo de aplicaciones móviles, desarrollo web y
            automatización de procesos empresariales. Nuestro enfoque combina
            creatividad, tecnología de punta y un entendimiento profundo de las
            necesidades de nuestros clientes para entregar resultados que
            superen expectativas. Creemos en construir relaciones a largo plazo
            basadas en confianza, transparencia y un compromiso genuino con el
            éxito de cada proyecto. Más que un proveedor, queremos ser tu aliado
            estratégico en el camino hacia la transformación digital. ¡Juntos
            podemos llevar tu negocio al siguiente nivel!
          </Col>
        </Row>
      </Container>
    </section>
  );
}
