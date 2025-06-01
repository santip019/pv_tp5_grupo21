const AcercaDe = () => {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow">
      <h1 className="text-center mb-4 text-primary"> 👨‍🏫 Trabajo Práctico Nº5 - Programación Visual</h1>

      <h2 className="text-secondary"> Grupo 21 - Integrantes</h2>
      <ul className="list-group list-group-flush mb-4">
        <li className="list-group-item">👨‍🎓 Santiago Padilla (santip019)</li>
        <li className="list-group-item">👨‍🎓 Valentina Efimov (Valen-08)</li>
        <li className="list-group-item">👨‍🎓 Antonela Cruz (antocruz06)</li>
        <li className="list-group-item">👨‍🎓 Bruno Fernandez (brunofernandez877)</li>
        <li className="list-group-item">👨‍🎓 Maximiliano Calpanchay (maxiicalpa)</li>
      </ul>

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
