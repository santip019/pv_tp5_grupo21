import { Routes, Route } from 'react-router-dom'
import Inicio from './Inicio'
import ListaAlumnos from './ListaAlumnos.jsx'
import NuevoAlumno from './NuevoAlumno.jsx'
import AcercaDe from './AcercaDe.jsx'
import Layout from './Layout.jsx'

function App() {
  return(
    <Routes>  
      <Route path="/" element={ <Layout /> }> 
        <Route index element={ <Inicio /> } />
        <Route path="/alumnos" element={ <ListaAlumnos /> } />
        <Route path="/nuevo-alumno" element={ <NuevoAlumno /> } />
        <Route path="/Acerca-De" element={ <AcercaDe /> } />
      </Route>
    </Routes>
  )
}

export default App