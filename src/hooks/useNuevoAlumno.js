import { useState, useCallback } from "react";

export function useNuevoAlumno(alumnos, setAlumnos) {
  const [nuevoAlumno, setNuevoAlumno] = useState({
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
    estado: true,
  });

  const [alerta, setAlerta] = useState("");

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

    if (
      !nuevoAlumno.nombre ||
      !nuevoAlumno.apellido ||
      !nuevoAlumno.curso ||
      !nuevoAlumno.email ||
      !nuevoAlumno.domicilio ||
      !nuevoAlumno.telefono
    ) {
      setAlerta("Por favor, completa todos los campos.");
      return;
    }

    const agregarAlumno = {
      ...nuevoAlumno,
      lu: siguienteLU,
      estado: true,
    };

    setAlumnos((prev) => [...prev, agregarAlumno]);

    setNuevoAlumno({
      nombre: "",
      apellido: "",
      curso: "",
      email: "",
      domicilio: "",
      telefono: "",
      estado: true,
    });
    setAlerta("");
  };

  const cerrarAlerta = () => setAlerta("");

  return {
    nuevoAlumno,
    setNuevoAlumno,
    siguienteLU,
    manejarCambio,
    alerta,
    manejarEnvio,
    cerrarAlerta,
  };
}