import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function VerDetalles({ alumnos }) {
  const { lu } = useParams();
  const navigate = useNavigate();

  const alumno = alumnos.find(a => a.lu === lu);

  if (!alumno) {
    return <h2>Alumno no encontrado</h2>;
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>{alumno.nombre} {alumno.apellido}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">LU: {alumno.lu}</Card.Subtitle>
          <Card.Text>
            <strong>Curso:</strong> {alumno.curso}<br />
            <strong>Email:</strong> {alumno.email}<br />
            <strong>Domicilio:</strong> {alumno.domicilio}<br />
            <strong>Teléfono:</strong> {alumno.telefono}<br />
            <strong>Estado:</strong> {alumno.estado ? 'Activo' : 'Inactivo'}
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate('/alumnos')}>Volver</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VerDetalles;