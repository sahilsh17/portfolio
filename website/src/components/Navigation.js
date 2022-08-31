import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Sahil Sharma</Navbar.Brand>
  
  {/* <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Hire Me</Nav.Link>
    </Nav>
   
  </Navbar.Collapse> */}
</Navbar>
</>
  );
}

export default Navigation;
