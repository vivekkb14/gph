import React, { useState } from 'react'
import ranjithPic from '../../../../assets/About-us/Doctor1.webp';
import sanjayPic from '../../../../assets/About-us/sanjay.jpg';
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
            <img src={ranjithPic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Dr Ranjith K M</p>
              <p className='normalText'>
                Dr Ranjith is skilled veterinarian at Global Pet Hospital, known for
                his expertise in animal surgery and preventive care. With a focus on
                compassionate treatment, he ensures the well-being of pets through regular check-ups,
                vaccinations, and emergency care, earning the trust of pet owners in the community.
                He earned his Masters in Veterinary at Bangalore
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
            <img src={sanjayPic} className='inspection-image'></img>
            <div className='texts'>
              <p className='aboutPageHeadTextComponent'>Sanjay H M</p>
              <p className='normalText'>
                Sanjay H M is manager in Global Pet Hospital. He manages pet grooming,
                pet medicines and other internal things. He has three years of managerial
                experience in corporate world. He is back-bone of global pet hospital.
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
