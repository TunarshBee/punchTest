import React from 'react';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Vector from '../../images/Vector.svg'


class Navbar extends React.Component {
  render(){
    
    return (
      <>
        <Nav className='nav' >
          <a href="#welcome" style={{color:'#000'}}>
            
            <img src={Vector} alt='' className='vector'/>
            <h3 className="recrowdly">Recrowdly</h3>
          </a>

          <NavMenu>
           <a className='links' href='#welcome'>Home</a>
            <a className='links' href='#objective'>
              Services
            </a>
            <a className='links' href='#pricing'>
              Pricing
            </a>
            <a className='links' href='#portfolio'>
              Portfolio
            </a>
          </NavMenu>
          <NavBtn className='callBtn'>
            <NavBtnLink to='/' className="callSched" >Schedule A Call</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  }

 
};

export default Navbar;
