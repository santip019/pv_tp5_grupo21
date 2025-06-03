import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const Papelera = ({ alumnos, setAlumnos }) => {
  const navigate = useNavigate();

  const alumnosInactivos = alumnos.filter((alumno) => !alumno.estado);

  const rehabilitarAlumno = (lu) => {
    const actualizados = alumnos.map((alumno) =>
      alumno.lu === lu ? { ...alumno, estado: true } : alumno
    );
    setAlumnos(actualizados);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>
          <Badge bg="danger">Papelera de Alumnos</Badge>
        </h2>
        <Button variant="outline-primary" onClick={() => navigate("/alumnos")}>
          ← Volver al Listado
        </Button>
      </div>

      <div className="row">
        {alumnosInactivos.length > 0 ? (
          alumnosInactivos.map((alumno) => (
            <div key={alumno.lu} className="col-md-4 d-flex">
              <Card className="card">
                <Card.Body>
                  <Card.Title>
                    {alumno.nombre} {alumno.apellido}
                  </Card.Title>
                  <Card.Text>LU: {alumno.lu}</Card.Text>
                  <Button
                    variant="info"
                    onClick={() =>
                      navigate(`/alumno/${alumno.lu}`, {
                        state: { from: "papelera" },
                      })
                    }
                  >
                    Ver Detalles
                  </Button>{" "}
                  <Button
                    variant="success"
                    onClick={() => rehabilitarAlumno(alumno.lu)}
                  >
                    Rehabilitar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p className="text-muted">No hay alumnos en la papelera.</p>
        )}
      </div>
    </div>
  );
};

export default Papelera;
