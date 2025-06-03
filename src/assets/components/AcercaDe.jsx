import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import a from '../img/pngdev.png';

const integrantes = [
  {
    nombre: "Santiago Padilla",
    escuela: "Escuela de Minas",
    github: "santip019"
  },
  {
    nombre: "Valentina Efimov",
    escuela: "Escuela de Minas",
    github: "Valen-08"
  },
  {
    nombre: "Antonela Cruz",
    escuela: "Escuela de Minas",
    github: "antocruz06"
  },
  {
    nombre: "Bruno Fernandez",
    escuela: "Escuela de Minas",
    github: "brunofernandez877"
  },
  {
    nombre: "Maximiliano Calpanchay",
    escuela: "Escuela de Minas",
    github: "maxiicalpa"
  }
];

const AcercaDe = () => {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h1 className="text-center mb-4 text-primary"> 👨‍🏫 Trabajo Práctico Nº5 - Programación Visual</h1>
      <h2 className="text-secondary"> Grupo 21 - Integrantes</h2>

      <div className="mb-4">
        {integrantes.map((int, idx) => (
          <div className="row mb-3 align-items-center" key={int.github}>
            {/* Alterna el orden de la imagen y la info */}
            {idx % 2 === 0 ? (
              <>
                <div className="col-md-3 d-flex justify-content-center">
                  <img src={a} alt={int.nombre} className="img-fluid rounded" style={{maxWidth: '120px'}} />
                </div>
                <div className="col-md-9">
                  <Card>
                    <Card.Body>
                      <Card.Title>{int.nombre}</Card.Title>
                      <Card.Text>
                        <p>Escuela: {int.escuela}</p>
                        <p>User en GitHub: {int.github}</p>
                      </Card.Text>
                      <Button variant="primary" href={`https://github.com/${int.github}`} target="_blank">
                        Más información
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-9">
                  <Card>
                    <Card.Body>
                      <Card.Title>{int.nombre}</Card.Title>
                      <Card.Text>
                        <p>Escuela: {int.escuela}</p>
                        <p>User en GitHub: {int.github}</p>
                      </Card.Text>
                      <Button variant="primary" href={`https://github.com/${int.github}`} target="_blank">
                        Más información
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                  <img src={a} alt={int.nombre} className="img-fluid rounded" style={{maxWidth: '120px'}} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <p className="lead">
        Este sitio fue desarrollado como parte del Trabajo Práctico Nº5 de la materia <strong>Programación Visual</strong> para el profesor Gustavo Sosa.
        Donde utilizamos <strong>React</strong> junto con <strong>Vite</strong> para construir una SPA moderna,
        aplicando conceptos como <em>rutas dinámicas</em>, <em>navegación programática</em> y <em>redirecciones</em> 
        . Esto nos permitió desarrollar una aplicación más rápida, organizada y profesional,
        mejorando la experiencia del usuario y permitiendo vistas dinámicas y controladas.
      </p>

      <div className="alert alert-info mt-4 text-center">
        <em>🧠 Este trabajo fue realizado con mucho entusiasmo, compromiso y un gran espíritu de equipo por todo el grupo💪</em>
      </div>

      <p className="text-muted text-end mt-3">📅 APU 2025</p>
    </div>
  );
};

export default AcercaDe;