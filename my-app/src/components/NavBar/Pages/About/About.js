import React, { useState } from 'react'
import pic from '../../../../assets/About-us/Doctor1.webp';
import './About.css';

export const About = () => {
  const [medicalStaff, setMedicalStaff] = useState(true)
  const [nonMedicalStaff, setNonMedicalStaff] = useState(false)
  return (
    <div className='entire-component'>
      <div className='selection-component'>
        <p className='optionsButton' onClick={() => { setMedicalStaff(true); setNonMedicalStaff(false) }}>Medical staff</p>
        <p className='middleSpace'></p>
        <p className='optionsButton' onClick={() => { setMedicalStaff(false); setNonMedicalStaff(true) }}>Non-medical staff</p>
      </div>
      {medicalStaff &&
        <div className='component'>
          <p className='thirdComponent'>Medical Staff</p>
          <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Dr Ranjith K M</p>
              <p className='normalText'>
                Dr Ranjith earned this Masters in Veterinary at Bangalore
                Veterinary College. He manages our team and makes sure all our
                backgrounds work together to help support our organisation.
              </p>
            </div>
          </div>
          {/* <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Dr Bhavana</p>
              <p className='normalText'>
                Dr Ranjith earned this Masters in Veterinary at Bangalore
                Veterinary College. He manages our team and makes sure all our
                backgrounds work together to help support our organisation.
              </p>
            </div>
          </div> */}
        </div>
      }
      {nonMedicalStaff &&
        <div className='component'>
          <p className='thirdComponent'>Non-Medical Staff</p>
          <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Sanjay H M</p>
              <p className='normalText'>
                Dr Ranjith earned this Masters in Veterinary at Bangalore
                Veterinary College. He manages our team and makes sure all our
                backgrounds work together to help support our organisation.
              </p>
            </div>
          </div>
          {/* <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Dr Ranjith K M</p>
              <p className='normalText'>
                Dr Ranjith earned this Masters in Veterinary at Bangalore
                Veterinary College. He manages our team and makes sure all our
                backgrounds work together to help support our organisation.
              </p>
            </div>
          </div>
          <div className='middleComponent'>
            <img src={pic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Dr Ranjith K M</p>
              <p className='normalText'>
                Dr Ranjith earned this Masters in Veterinary at Bangalore
                Veterinary College. He manages our team and makes sure all our
                backgrounds work together to help support our organisation.
              </p>
            </div>
          </div> */}
        </div>
      }
    </div>
  )
}

export default About
