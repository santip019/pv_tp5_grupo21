import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto w-100 justify-content-between">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/alumnos">
                Alumnos
              </Nav.Link>
              <Nav.Link as={Link} to="/nuevo-alumno">
                Nuevo Alumno
              </Nav.Link>
              <Nav.Link as={Link} to="/Acerca-De">
                Acerca de
              </Nav.Link>
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
