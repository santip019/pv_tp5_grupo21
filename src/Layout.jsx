import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Sistema de Alumnos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/alumnos">Alumnos</Nav.Link>
              <Nav.Link as={Link} to="/nuevo-alumno">Nuevo Alumno</Nav.Link>
              <Nav.Link as={Link} to="/Acerca-De">Acerca de</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;