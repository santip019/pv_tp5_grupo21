import { useState, useCallback } from "react";

const NuevoAlumno = ({ setAlumnos, alumnos }) => {
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
    estado: true,
  });

  const siguienteLU = "APU" + String(alumnos.length + 1).padStart(5, "0");

  const manejarCambio = useCallback((evento) => {
    const { name, value } = evento.target;
    setNuevoAlumno((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    // Validación de que todos los campos estén llenos
    if (
      !nuevoAlumno.nombre ||
      !nuevoAlumno.apellido ||
      !nuevoAlumno.curso ||
      !nuevoAlumno.email ||
      !nuevoAlumno.domicilio ||
      !nuevoAlumno.telefono
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Crear un nuevo alumno
    const agregarAlumno = {
      ...nuevoAlumno,
      nombre: nuevoAlumno.nombre,
      apellido: nuevoAlumno.apellido,
      curso: nuevoAlumno.curso,
      email: nuevoAlumno.email,
      domicilio: nuevoAlumno.domicilio,
      telefono: nuevoAlumno.telefono,
      lu: siguienteLU,
      estado: true, // Por defecto, el estado es activo
    };

    // Llamar a la función para agregar el nuevo alumno
    setAlumnos((prev) => [...prev, agregarAlumno]);

    // Reiniciar el formulario
    setNuevoAlumno({
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
    });
  };

  return (
    <form onSubmit={manejarEnvio}>
      <div>
        <label>LU: </label>
        <span> {siguienteLU}</span>
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={nuevoAlumno.nombre}
          onChange={manejarCambio}
          pattern="^(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ0\s]+$"
          title="Solo letras y espacios, no solo espacios"
        />
      </div>
      <div>
        <label>Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={nuevoAlumno.apellido}
          onChange={manejarCambio}
          pattern="^(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$"
          title="Solo letras y espacios, no solo espacios"
        />
      </div>
      <div>
        <label>Curso:</label>
        <input
          type="text"
          name="curso"
          value={nuevoAlumno.curso}
          onChange={manejarCambio}
          pattern="^(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$"
          title="Letras, números y espacios, no solo espacios"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={nuevoAlumno.email}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label>Domicilio:</label>
        <input
          type="text"
          name="domicilio"
          value={nuevoAlumno.domicilio}
          onChange={manejarCambio}
          pattern="^(?!\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$"
          title="Letras, números y espacios, no solo espacios"
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="telefono"
          value={nuevoAlumno.telefono}
          onChange={manejarCambio}
          title="Solo números y caracteres válidos para teléfono"
        />
      </div>
      <div>
        <label>Estado:</label>
        <span>
          {nuevoAlumno.estado === undefined || nuevoAlumno.estado
            ? "Activo"
            : "Inactivo"}
        </span>
      </div>
      <div>
        <button className="agregar-cambiar" type="submit">
          Agregar Alumno
        </button>
      </div>
    </form>
  );
};
export default NuevoAlumno;
