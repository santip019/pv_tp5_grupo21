import Carousel from 'react-bootstrap/Carousel'
import ImagenCarrusel from './ImagenCarrusel' //componente reutilizable para poder darle un formato establecido a cada imagen
import imagen1 from './assets/img/carrusel1.jpg'
import imagen2 from './assets/img/carrusel2.jpg'
import imagen3 from './assets/img/carrusel3.png'
import './App.css'

function Inicio() {
  return (
    <div className="intro container mt-4">
      <h1 className="intro-titulo text-center mb-3">Bienvenido al Sistema de Gestión de Alumnos</h1>
      <p className="intro-texto text-center">
        Este sistema te permitirá registrar, editar, eliminar y consultar información detallada
        de los estudiantes de nuestra institución.
      </p>

      <Carousel>
        <Carousel.Item>
          <ImagenCarrusel src={imagen1} texto="Gestión académica eficiente"  />
          <Carousel.Caption className="descripcion-carrusel">
            <h3>Organiza a tus alumnos</h3>
            <p>Accede a la información completa de cada estudiante en un solo lugar.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel src={imagen2} texto="Información siempre actualizada" />
          <Carousel.Caption className="descripcion-carrusel">
            <h3>Actualización en tiempo real</h3>
            <p>Edita fácilmente los datos de los alumnos cuando lo necesites.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <ImagenCarrusel src={imagen3} texto="Facilidad de uso" />
          <Carousel.Caption className="descripcion-carrusel">
            <h3>Interfaz intuitiva</h3>
            <p>Un sistema pensado para docentes, administrativos y directivos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Inicio;