import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { useFunciones } from './hooks/useFunciones.js'; // hook personalizado
import Inicio from './assets/components/Inicio.jsx'
import ListaAlumnos from './assets/components/ListaAlumnos.jsx'
import NuevoAlumno from './assets/components/NuevoAlumno.jsx'
import AcercaDe from './assets/components/AcercaDe.jsx'
import Layout from './assets/components/Layout.jsx'
import EditarAlumno from "./assets/components/EditarAlumno.jsx";
import VerDetalles from './assets/components/VerDetalles.jsx'
import Papelera from './assets/components/Papelera.jsx';


function App() {
  const { alumnos, setAlumnos, eliminarAlumno } = useFunciones();

  return(
    <Routes>  
      <Route path="/" element={ <Layout /> }> 
        <Route index element={ <Inicio /> } />
        <Route path="/alumnos" element={ <ListaAlumnos alumnos={alumnos} eliminarAlumno={eliminarAlumno}/> } />
        <Route path="/nuevo-alumno" element={ <NuevoAlumno setAlumnos={setAlumnos} alumnos={alumnos} /> } />
        <Route path="/editar-alumno/:lu" element={ <EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} /> } />
        <Route path="/alumno/:lu" element={<VerDetalles alumnos={alumnos} />} />
        <Route path="/Acerca-De" element={ <AcercaDe /> } />
        <Route path="/papelera" element={<Papelera alumnos={alumnos} setAlumnos={setAlumnos} />} />
      </Route>
    </Routes>
  )
}

export default App