import React from 'react'
import pic from '../../../../assets/Doctor1.webp';
import './About.css';

export const About = () => {
  return (
   <>
    <div className='component'>
      <div className='middleComponent'>
        <img src={pic} className='inspection-image'></img>
        <div className='texts'>
          <p className='headTextComponent'>Dr Ranjith K M</p>
          <p className='normalText'>
            Dr Ranjith earned this Masters in Veterinary at Bangalore 
            Veterinary College. He manages our team and makes sure all our 
            backgrounds work together to help support our organisation.
          </p>
        </div>
      </div>
      <div className='middleComponent'>
        <div className='texts'>
          <p className='headTextComponent'>Dr Ranjith K M</p>
          <p className='normalText'>
            Dr Ranjith earned this Masters in Veterinary at Bangalore 
            Veterinary College. He manages our team and makes sure all our 
            backgrounds work together to help support our organisation.
          </p>
        </div>
        <img src={pic} className='inspection-image'></img>
      </div>
    </div>
   </>
  )
}

export default About
