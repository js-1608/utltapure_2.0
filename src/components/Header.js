import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import '../App.css';  

function Header() {
  return (
    <Navbar expand="lg" className="nav-top-border">
      <Container>
        {/* icon */}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto m-auto" direction="horizontal">
            <Nav.Link href="#home" className="nav-link-gap">About Us</Nav.Link>
            <Nav.Link href="#link" className="nav-link-gap">Our Technology</Nav.Link>
            <NavDropdown title="Market Served" id="basic-nav-dropdown" className="nav-dropdown-gap nav-link-gap">
              <NavDropdown.Item href="#action/3.1" className="nav-link-gap">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-link-gap">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="nav-link-gap">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="nav-link-gap">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link-gap">Solutions</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="nav-dropdown-gap nav-link-gap">
              <NavDropdown.Item href="#action/3.1" className="nav-link-gap">p1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="nav-link-gap">p2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="nav-link-gap">p3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="nav-link-gap">p4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link-gap">Resources</Nav.Link>
            <Nav.Link href="#link" className="nav-link-gap">Insights</Nav.Link>
          </Nav>
          <Button variant="outline-success">Book Demo</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
