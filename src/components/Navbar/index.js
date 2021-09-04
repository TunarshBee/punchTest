import React from 'react';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Vector from '../../images/Vector.svg'

const Navbar = () => {
  return (
    <>
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
