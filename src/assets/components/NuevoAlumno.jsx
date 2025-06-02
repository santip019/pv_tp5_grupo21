import { useNuevoAlumno } from '../../hooks/useNuevoAlumno';

const NuevoAlumno = ({ setAlumnos, alumnos }) => {
  const {
    nuevoAlumno,
    siguienteLU,
    manejarCambio,
    manejarEnvio,
  } = useNuevoAlumno(alumnos, setAlumnos);

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