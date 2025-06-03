import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";

function VerDetalles({ alumnos }) {
  const { lu } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <h2 className="text-center mt-5 text-danger">Alumno no encontrado</h2>
    );
  }

  const volverA =
    location.state?.from === "papelera" ? "/papelera" : "/alumnos";

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card
        className="shadow-lg"
        style={{ width: "32rem", borderRadius: "1rem" }}
      >
        <Card.Body>
          <div className="text-center mb-3">
            <Badge
              bg={alumno.estado ? "success" : "secondary"}
              className="mb-2"
              style={{ fontSize: "1rem" }}
            >
              {alumno.estado ? "Activo" : "Inactivo"}
            </Badge>
            <Card.Title as="h2" className="mb-1">
              {alumno.nombre} {alumno.apellido}
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              LU: {alumno.lu}
            </Card.Subtitle>
          </div>
          <Row className="mb-2">
            <Col xs={4} className="fw-bold">
              Curso:
            </Col>
            <Col xs={8}>{alumno.curso}</Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="fw-bold">
              Email:
            </Col>
            <Col xs={8}>
              <a href={`mailto:${alumno.email}`}>{alumno.email}</a>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs={4} className="fw-bold">
              Domicilio:
            </Col>
            <Col xs={8}>{alumno.domicilio}</Col>
          </Row>
          <Row className="mb-4">
            <Col xs={4} className="fw-bold">
              Teléfono:
            </Col>
            <Col xs={8}>{alumno.telefono}</Col>
          </Row>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={() => navigate(volverA)}>
              Volver
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VerDetalles;
