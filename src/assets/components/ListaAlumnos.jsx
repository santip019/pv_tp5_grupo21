import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from "react-router-dom";
import '../../../src/App.css';

function ListaAlumnos({alumnos}) {
  const navigate = useNavigate();
  const listaAlumnos = alumnos.filter(alumno => alumno.estado).map((alumno) => (
    <div key={alumno.lu} className="col-md-4 d-flex">
      <Card className='card'>
        <Card.Body>
          <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
          <Card.Text>
             Datos del alumno LU: {alumno.lu}
          </Card.Text>
          <Button variant="danger" onClick={() => eliminarAlumno(alumno.lu)}>Eliminar</Button>
          <Button variant="success" onClick={() => navigate(`/editar-alumno/${alumno.lu}`)}>Editar</Button>
          <Button variant="info" onClick={() => navigate(`/alumno/${alumno.lu}`)}>Ver Detalles</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2><Badge bg="primary" >Listado de alumnos</Badge></h2>
      <div className="row">
        {listaAlumnos}
      </div>
    </div>
  );
}
export default ListaAlumnos;