import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'
import ListaAlumnos from './ListaAlumnos.jsx'
import NuevoAlumno from './NuevoAlumno.jsx'
import AcercaDe from './AcercaDe.jsx'
import Layout from './Layout.jsx'

function App() {
  const [alumnos, setAlumnos] = useState([]);
  return(
    <Routes>  
      <Route path="/" element={ <Layout /> }> 
        <Route index element={ <Inicio /> } />
        <Route path="/alumnos" element={ <ListaAlumnos alumnos={alumnos} /> } />
        <Route path="/nuevo-alumno" element={ <NuevoAlumno setAlumnos={setAlumnos} alumnos={alumnos} /> } />
        <Route path="/Acerca-De" element={ <AcercaDe /> } />
      </Route>
    </Routes>
  )
}

export default App