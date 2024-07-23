import React from 'react'
import pic from '../media/Doctor1.webp';
import './AboutPage.css';

export const AboutPage = () => {
  return (
   <>
 <div className='component'>
        <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
                <p className='headTextComponent'>Dr Ranjith K M.</p>
                <p className='normalText'>Dr Ranjith earned this Masters in Veterinary at Bangalore Veterinary College. He manages our team and makes sure all our backgrounds work together to help support our organisation.</p>
            </div>
        </div>
        </div>
   </>
  )
}

export default AboutPage