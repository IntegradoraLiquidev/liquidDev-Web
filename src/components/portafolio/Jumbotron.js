import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
class Jumbotron extends React.Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col>
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                  Somos una comunidad en donde fomentamos el conocimiento
                  colectivo.
                  <br />
                  Solo de esta manera se formarán profesionales que cambien sus
                  vidas y tengan un mejor futuro.
                </p>
                <p>
                  <a
                    className="btn btn-primary btn-lg"
                    href="https://nubecolectiva.com"
                    target="_blank"
                    role="button"
                  >
                    Visitar Web
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Jumbotron;
