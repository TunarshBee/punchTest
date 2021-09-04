import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBtn } from './NavbarElements'
import video from '../../images/video.svg'
import '../../css/welcome.css'

function Welcome() {

    return (
        <div className='welcome'>
            <h2>
            Bring your idea to life with vivid colors and wonderful animations.
            </h2>
            <form>
                <input type='email' placeholder='Enter an email address  and let’s get started'/>
                <a href='/'>
                    Let's Go
                </a>
            </form>
            <img src={video} alt='Video' className='video' />
        
        </div>
    )
}

export default Welcome
