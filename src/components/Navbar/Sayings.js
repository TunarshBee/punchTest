import React from 'react'
import '../../css/saying.css'
import { Carousel, CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Sayings() {
    return (
        <div className='saying'>
            <p>What Others Are Saying:</p>
            <Carousel>
                <CarouselItem>
                    <h1 className="caro2">
                        <span>
                            Noah showed me how to grow my email list and figure out my site’s <br /> revenue model. Don’t let his casual, taco-talking style fool you. The <br /> guy gets serious business results.”
                        </span>
                        <a href='/'>
                            – Andrew Warner <br />Founder of Mixergy.com
                        </a>
                    </h1>
                </CarouselItem>
                <CarouselItem>
                    <h1 className="caro2">
                        <span>
                            Noah showed me how to grow my email list and figure out my site’s <br /> revenue model. Don’t let his casual, taco-talking style fool you. The <br /> guy gets serious business results.”
                        </span>
                        <a href='/'>
                            – Andrew Warner <br />Founder of Mixergy.com
                        </a>
                    </h1>
                </CarouselItem>
                <CarouselItem>
                    <h1 className="caro2">
                        <span>
                            Noah showed me how to grow my email list and figure out my site’s <br /> revenue model. Don’t let his casual, taco-talking style fool you. The <br /> guy gets serious business results.”
                        </span>
                        <a href='/'>
                            – Andrew Warner <br />Founder of Mixergy.com
                        </a>
                    </h1>
                </CarouselItem>
            </Carousel>


        </div>
    )
}

export default Sayings
