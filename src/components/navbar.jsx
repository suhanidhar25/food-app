import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="custom-navbar" collapseOnSelect>
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          SLICE & SPOON
        </BootstrapNavbar.Brand>

        {/* Toggle button for small screens */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
            <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
