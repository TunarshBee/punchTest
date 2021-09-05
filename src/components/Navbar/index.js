import React from 'react';
import {
  Nav,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Vector from '../../images/Vector.svg'
// import {Nav} from 'react-bootstrap'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../../node_modules/bootstrap/dist/js/bootstrap'

class Navbar extends React.Component {
  render(){
    
    return (
      <>
        <Nav className='nav' >
          <a href="#welcome" style={{color:'#000'}}>
            
            <img src={Vector} alt='' className='vector'/>
            <h3 className="recrowdly">Recrowdly</h3>
          </a>
            {/* <b className='closeBtn' > X </b> */}
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
