import React from 'react'
import "./Home.css"
import impatientCheckImage from '../../../../assets/dog-being-checked-by-vet-pet-shop.jpg'
import machinesImage from '../../../../assets/machines.png'
import stethascpeImage from '../../../../assets/stethascope.png'
import doctors from '../../../../assets/doctors.png'
import TestimonialSlider from './Testimonial/Testimonial'

export const Home = () => {
    return (
        <div className="root-componenet">
            <div className="home-component">
                <p className="home-text">GLOBAL PET HOSPITAL</p>
                <p className="sub-text">We care about your pet</p>
            </div>
            {/* <div className='impatient-check'>
                <img src={impatientCheckImage} className='inspection-image'></img>
                <div className='text-component'>
                    <p className='headTextComponent'>We prioritize the health of your pet.</p>
                    <p className='normalText'>
                        We are available 24/7 for emergency surgeries and we 
                        provide doorstep delivery of medicine and pet food.
                    </p>
                </div>
            </div> */}
            <div>
                <p className='thirdComponent'>The Practice</p>
            </div>
            <div className='fourthComponent'>
                <div className='imageComponent'>
                    <img src={doctors} ></img>
                    <p className='mainText'> Our Health Mission</p>
                    <p className='paragraph'>Our experienced medical professionals put 
                        your pet's healing needs first. We are proud 
                        to provide a high quality level of customer 
                        service, medical experience and commitment to 
                        health and wellness. Our goal is to make your pet 
                        feel better as quickly as possible.</p>
                </div>
                <div className='imageComponent'>
                    <img src={machinesImage} ></img>
                    <p className='mainText'>Experience and Professionalism</p>
                    <p className='paragraph'>With 4 years of experience, our medical 
                        team will assess you and create a custom recovery plan that's 
                        right for you. We understand the importance of educating you on 
                        the most effective ways to take care of your pet, 
                        so that it can heal quickly. </p>
                </div>
                <div className='imageComponent'>
                    <img src={stethascpeImage} ></img>
                    <p className='mainText'> Physicians Who Care </p>
                    <p className='paragraph'>
                        Not only will our doctors treat your existing conditions, we 
                        also work to maximise your prevention strategies. We strive 
                        to help you improve your pet's quality of life, achieve pet's 
                        wellness goals.
                    </p>
                </div>
            </div>
            <TestimonialSlider/>
        </div>
    )
}

export default Home
