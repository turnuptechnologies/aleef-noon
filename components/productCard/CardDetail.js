import React from 'react'

const CardDetail = ({bedrooms,bathrooms,price, img}) => {
  return (
    <div className='CardSlider'>
        <img src={img} style={{ height: '420px' }}/>
        <div className='cardDetail'>
        <div className='detailHeader'>
            <p>
                A modern property provides a range of amenities ensuring a comfortable living.
            </p>
            <p>
                The Penthouse is 5237.72 ft² or 487 m², number of bedrooms:{bedrooms}
            </p>
        </div>
        <div className='cardDetailInner'>
            <div className='flex justify-around'>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/bedroomIcon.svg' />  
                    <h1>Bedroom {bedrooms}</h1>
                </div>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/bathIcon.svg' />
                    <h1>Bath {bathrooms}</h1>
                </div>
            </div>
            <div className='flex justify-around'>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/sqrft3.svg' />  
                    <h1>1143sq.ft</h1>
                </div>
                <div className='iconBox'>
                    <img style={{width: '55px'}} alt='none' src='/dollarIcon.svg' />
                    <h1>{price}</h1>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardDetail