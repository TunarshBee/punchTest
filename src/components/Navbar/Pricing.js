import React from 'react'
import '../../css/pricing.css'
import FirstCard from './cards/FirstCard'
import SecondCard from './cards/SecondCard'
import ThirdCard from './cards/ThirdCard'

function Pricing() {
    return (
        <div className='pricingContainer'>
            <h1 className='model'>
                Pricing Model
            </h1>
            <div className='pricinCards'>
                <FirstCard/>
                <SecondCard/>
                <ThirdCard/>
            </div>
            <div className='addOn'>
                <h1>
                    Add-ons
                </h1>
                <div className='addCards'>
                    <p>
                        Live actor or actress $350 <br/>
                        Copywriting and story direction: $500
                    </p>
                    <p>
                        Asset creation 2D or 3D $45/hour <br/>
                        Each video includes two sets of revisions
                    </p>
                    <p>
                        Additional revisions billed at $45/hr
                    </p>
                </div>
                <div className='guarantee'>
                Satisfaction guaranteed. If you’re not happy with the final product don’t pay a dime!
                </div>
            </div>
        </div>
    )
}

export default Pricing
