import React from 'react'
import video from '../../images/video.svg'
import '../../css/welcome.css'
import {
    NavBtn,
    NavBtnLink
} from './NavbarElements';
import Navbar from '../../components/Navbar/index';
import Vector from '../../images/Vector.svg'
class Welcome extends React.Component {

    state = {
        isActive: false
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return (
            <div className='welcome ' id='welcome'>

                <div className='menuIcon' onClick={this.handleToggle} >
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

                <div className={this.state.isActive ? "visible" : 'hidden'}>
                    <Navbar />
                </div>
                <img src={Vector} alt='' className='vector1' />
                <NavBtn className='callBtn2'>
                    <NavBtnLink to='/' className='callSched2'>Schedule A Call</NavBtnLink>
                </NavBtn>
                <h2 >
                    Bring your idea to life with vivid colors and wonderful animations.
                </h2>
                <form>
                    <input type='email' placeholder='Enter an email address  and let’s get started' />
                    <a href='/'>
                        Let's Go
                    </a>
                </form>
                <img src={video} alt='Video' className='video' />

            </div>
        )
    }

}

export default Welcome
