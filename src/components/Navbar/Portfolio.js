import React from 'react'
import '../../css/portfolio.css'
import { Carousel, CarouselItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Portfolio() {
    return (
        <div className='port-cont'  id='portfolio'>
            <h1>Portfolio</h1>
            <p>
            We've Created Hundreds of Videos for Satisfied Customers <br/>
            in the US and Globally.  Here Are Just a Few!
            </p>

                <Carousel>
                    <CarouselItem>
                        <h1 className="caro">

                        </h1>
                    </CarouselItem>    
                    <CarouselItem>
                        <h1 className="caro">

                        </h1>
                    </CarouselItem>    
                    <CarouselItem>
                        <h1 className="caro">
                            
                        </h1>
                    </CarouselItem>    
                </Carousel>                 

            <div className='autoBus'>
                <b>Automated Business Growth</b>
                <a href='/'>Schedule A Call</a>
            </div>
        </div>
    )
}

export default Portfolio
