import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ListaAlumnos({ alumnos, eliminarAlumno }) {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [luSeleccionado, setLuSeleccionado] = useState(null);

  //abre el modal de confirmación de eliminación y guarda el lu que se quiere eliminar
  const abrirModal = (lu) => {
    setLuSeleccionado(lu);
    setMostrarModal(true);
  };

  //confirma la eliminación
  const confirmarEliminacion = () => {
    eliminarAlumno(luSeleccionado);
    setMostrarModal(false);
    setLuSeleccionado(null);
  };

  //cancela la eliminación
  const cancelarEliminacion = () => {
    setMostrarModal(false);
    setLuSeleccionado(null);
  };

  const listaAlumnos = alumnos
    .filter((alumno) => alumno.estado)
    .map((alumno) => (
      <div key={alumno.lu} className="col-md-4 d-flex">
        <Card className="card">
          <Card.Body>
            <Card.Title>
              {alumno.nombre} {alumno.apellido}
            </Card.Title>
            <Card.Text>Datos del alumno LU: {alumno.lu}</Card.Text>
            <Button variant="danger" onClick={() => abrirModal(alumno.lu)}>
              Eliminar
            </Button>{" "}
            <Button
              variant="success"
              onClick={() => navigate(`/editar-alumno/${alumno.lu}`)}
            >
              Editar
            </Button>{" "}
            <Button
              variant="info"
              onClick={() => navigate(`/alumno/${alumno.lu}`)}
            >
              Ver Detalles
            </Button>
          </Card.Body>
        </Card>
      </div>
    ));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>
          <Badge bg="primary">Listado de alumnos</Badge>
        </h2>
        <Button variant="outline-danger" onClick={() => navigate("/papelera")}>
          🗑 Ver Papelera
        </Button>
      </div>

      <div className="row">
        {listaAlumnos.length > 0 ? (
          listaAlumnos
        ) : (
          <p className="text-muted">No hay alumnos activos en este momento.</p>
        )}
      </div>

      <Modal show={mostrarModal} onHide={cancelarEliminacion} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Está seguro que desea eliminar este alumno?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelarEliminacion}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={confirmarEliminacion}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ListaAlumnos;
