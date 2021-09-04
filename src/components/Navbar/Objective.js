import React from 'react'
import inskit from '../../images/inskit.svg'
import '../../css/objective.css'
import Card from './Card'
import TwoAnimation from '../../images/TwoAnimation.svg'
import threeAnimation from '../../images/threeAnimation.svg'
import mixed from '../../images/mixed.svg'

function Objective() {
    return (
        <div className='objective'>
            <p className='inskit'>
            <img src={inskit} alt=''  />
            </p>
            <h1 className='article'>
                Animated Video Production & Video Marketing Services:
            </h1>
            <h3 className="article2">
                Our services cover the entire gamut of what you could use
                to really get your business’s value proposition out there.
            </h3>
            <Card Image={TwoAnimation} Animation='2D Animation' Content='Go classic with a lively 2D animated video that brings to life your ideas to life with vivid colors and motion.' />
            <Card Image={threeAnimation} Animation='3D Animation' Content='3D models interact with reality to lend your concept new dimensions. ' />
            <Card Image={mixed} Animation='Mixed Media' Content='Get the best of both 2D and 3D worlds to really bring the most out of your concept.' />
        </div>
    )
}

export default Objective
