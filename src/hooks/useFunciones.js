import { useState, useEffect } from "react";

export function useFunciones() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    console.log(alumnos);
  }, [alumnos]);

  const eliminarAlumno = (lu) => {
    setAlumnos(prevAlumnos =>
      prevAlumnos.map(alumno =>
        alumno.lu === lu ? { ...alumno, estado: false } : alumno
      )
    );
  };
  return {
    alumnos,
    setAlumnos,
    eliminarAlumno,
  };
}