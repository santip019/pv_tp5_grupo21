import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Inicio from './assets/components/Inicio.jsx'
import ListaAlumnos from './assets/components/ListaAlumnos.jsx'
import NuevoAlumno from './assets/components/NuevoAlumno.jsx'
import AcercaDe from './assets/components/AcercaDe.jsx'
import Layout from './assets/components/Layout.jsx'
import EditarAlumno from "./assets/components/EditarAlumno.jsx";
import VerDetalles from './assets/components/VerDetalles.jsx'


function App() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    console.log(alumnos);
  }, [alumnos]);
  
  return(
    <Routes>  
      <Route path="/" element={ <Layout /> }> 
        <Route index element={ <Inicio /> } />
        <Route path="/alumnos" element={ <ListaAlumnos alumnos={alumnos} /> } />
        <Route path="/nuevo-alumno" element={ <NuevoAlumno setAlumnos={setAlumnos} alumnos={alumnos} /> } />
        <Route path="/editar-alumno/:lu" element={ <EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} /> } />
        <Route path="/alumno/:lu" element={<VerDetalles alumnos={alumnos} />} />
        <Route path="/Acerca-De" element={ <AcercaDe /> } />
      </Route>
    </Routes>
  )
}

export default App