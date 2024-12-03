import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Terms() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <section>
        <Modal show={show} onHide={handleClose} className="mt-5">
          <Modal.Header closeButton>
            <Modal.Title>Términos y Condiciones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            1. Introducción Bienvenido a liquidDev. Al utilizar nuestra
            aplicación, usted acepta cumplir y estar sujeto a los siguientes
            términos y condiciones. Si no está de acuerdo con alguna parte de
            estos términos, por favor, no utilice nuestra aplicación.
          </Modal.Body>
          <Modal.Body>
            2. Descripción de Servicios liquid Dev desarrolla aplicaciones web y
            móviles con el propósito de gestionar inventarios, optimizar
            operaciones comerciales y ofrecer soluciones publicitarias. Todos
            los servicios proporcionados a través de esta aplicación están
            destinados exclusivamente para uso informativo y profesional.
          </Modal.Body>
          <Modal.Body>
            3 Uso Aceptable Al utilizar esta aplicación, usted se compromete a:
            * No utilizar nuestros servicios para actividades ilegales. * No
            copiar, modificar o distribuir nuestros contenidos sin autorización.
            * No intentar acceder sin permiso a nuestros sistemas o datos.
          </Modal.Body>
          <Modal.Body>
            4 Propiedad Intelectual Todo el contenido, diseño, imágenes, logos,
            y otros elementos pertenecen a liquid Dev. Cualquier uso no
            autorizado de estos materiales está prohibido.
          </Modal.Body>
          <Modal.Body>
            5 Limitación de Responsabilidad liquidDev no es responsable por
            pérdidas o daños, directos o indirectos, que resulten del uso o
            incapacidad de utilizar nuestra aplicación, incluyendo, sin
            limitación, daños por la pérdida de datos o interrupciones del
            servicio.
          </Modal.Body>
          <Modal.Body>
            6 Actualizaciones Nos reservamos el derecho de modificar estos
            términos y condiciones en cualquier momento. Las actualizaciones se
            publicarán en nuestra aplicación y es su responsabilidad revisarlas
            periódicamente.
          </Modal.Body>
          <Modal.Body>
            7 Política de Privacidad Al utilizar nuestra aplicación, acepta que
            recopilemos y utilicemos su información personal de acuerdo con
            nuestra Política de Privacidad.
          </Modal.Body>
          <Modal.Body>
            8 Contacto Si tiene preguntas sobre estos términos, puede
            contactarnos en contactoliquidev@gmail.com
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Rechazar
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}
