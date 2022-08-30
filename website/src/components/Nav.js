import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Sahil Sharma</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#portfolio">POTFOLIO</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
</>
  );
}

export default Navigation;
