import { useNuevoAlumno } from '../../hooks/useNuevoAlumno';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NuevoAlumno = ({ setAlumnos, alumnos }) => {
  const {
    nuevoAlumno,
    siguienteLU,
    manejarCambio,
    manejarEnvio,
  } = useNuevoAlumno(alumnos, setAlumnos);

  return (
    <Form onSubmit={manejarEnvio}>
      <Form.Group className="mb-3" controlId="formBasicLU">
        <Form.Label>LU: </Form.Label>
        <Form.Control type="text" name="lu" value={siguienteLU} disabled />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" name="nombre" value={nuevoAlumno.nombre} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicApellido">
        <Form.Label>Apellido:</Form.Label>
        <Form.Control type="text" name="apellido" value={nuevoAlumno.apellido} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCurso">
        <Form.Label>Curso:</Form.Label>
        <Form.Control type="text" name="curso" value={nuevoAlumno.curso} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" value={nuevoAlumno.email} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDomicilio">
        <Form.Label>Domicilio:</Form.Label>
        <Form.Control type="text" name="domicilio" value={nuevoAlumno.domicilio} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicTelefono">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="text" name="telefono" value={nuevoAlumno.telefono} onChange={manejarCambio} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEstado">
        <Form.Label>Estado:</Form.Label>
        <Form.Control type="text" value={nuevoAlumno.estado === undefined || nuevoAlumno.estado? "Activo": "Inactivo"} disabled />
      </Form.Group>
      <Button variant="primary" type="submit">Agregar Alumno</Button>
    </Form>
  );
};

export default NuevoAlumno;