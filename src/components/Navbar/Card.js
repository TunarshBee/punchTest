import React from 'react'


function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.Image} alt={props.Image} className='img'/>
            <h3 className='animation'>
                {props.Animation}
            </h3>
            <p className='content'>
                {props.Content}
            </p>
        </div>
    )
}

export default Card
