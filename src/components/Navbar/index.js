import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Vector from '../../images/Vector.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/' style={{color:'#000'}}>
          <img src={Vector} alt='' />
          <h3>Recrowdly</h3>
        </NavLink>
        
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            Services
          </NavLink>
          <NavLink to='/services' activeStyle>
            Pricing
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Portfolio
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Schedule A Call</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
