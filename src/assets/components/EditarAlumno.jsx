import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditarAlumno({ alumnos, setAlumnos }) {
  const { lu } = useParams();
  const navigate = useNavigate();
  const alumnoOriginal = alumnos.find((a) => a.lu === lu);

  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  useEffect(() => {
    if (alumnoOriginal) {
      setFormData(alumnoOriginal);
    }
  }, [alumnoOriginal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosAlumnos = alumnos.map((a) => (a.lu === lu ? formData : a));
    setAlumnos(nuevosAlumnos);
    navigate("/alumnos");
  };

  if (!alumnoOriginal) {
    return <h2>Alumno no encontrado</h2>;
  }

  return (
    <div>
      <h2>Modifique los datos del alumno</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3-form">
          <Form.Label>LU</Form.Label>
          <Form.Control
            type="text"
            name="lu"
            value={formData.lu}
            onChange={handleChange}
            disabled
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            type="text"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Domicilio</Form.Label>
          <Form.Control
            type="text"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3-form">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar Cambios
        </Button>
      </Form>
    </div>
  );
}

export default EditarAlumno;
