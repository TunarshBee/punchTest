import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBtn } from './NavbarElements'
import '../../css/welcome.css'

function Welcome() {

    return (
        <div className='welcome'>
            <h2>
            Bring your idea to life with vivid colors and wonderful animations.
            </h2>
            <form>
                <input type='email' placeholder='Enter an email address  and let’s get started'/>
                <NavBtn>
                    <NavLink to='/'>
                        Let;s Go
                    </NavLink>
                </NavBtn>
            </form>

            <video width="400" controls="controls" preload="metadata">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5" type="video/mp4" />
</video>
        </div>
    )
}

export default Welcome
