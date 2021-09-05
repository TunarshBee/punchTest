import React from 'react';
import {
  // Nav,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Vector from '../../images/Vector.svg'
import {Container,NavDropdown, Nav} from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap'

const Navbar = () => {
  return (
    <>



<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




      <Nav>
        <a href="#welcome" style={{color:'#000'}}>
          <img src={Vector} alt='' />
          <h3>Recrowdly</h3>
        </a>
        
        <NavMenu>
         <a href='#welcome'>Home</a>
          <a href='#objective' activeStyle>
            Services
          </a>
          <a href='#pricing' activeStyle>
            Pricing
          </a>
          <a href='#portfolio' activeStyle>
            Portfolio
          </a>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Schedule A Call</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
