import React from 'react'
import Vector from '../../images/Vector.svg'
import '../../css/footer.css'

function Footer() {
    return (
        <div className='footerContainer'>
            <hr />
            <div className='footer'>
                <div className='vecRec'>
                    <img src={Vector} alt='' />
                    <h3> Recrowdly</h3></div>
                <div className='footLinks'>
                    <a href='/'>Portfolio</a>
                    <a href='/'>Pricing</a>
                    <a href='/'>Process</a>
                    <a href='/ '>FAQs</a>
                </div>
                <div className='section'>
                    <section>A Punch Group Company </section>
                    <b> punch</b>
                </div>
            </div>
        </div>
    )
}

export default Footer
