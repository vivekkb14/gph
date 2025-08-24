import React, { useEffect, useRef } from 'react'
import "./Home.css"
import machinesImage from '../../../../assets/Home/machines.png'
import stethascpeImage from '../../../../assets/Home/stethascope.png'
import doctors from '../../../../assets/Home/doctors.png'
import frontPageImage from '../../../../assets/Home/front-page-view.jpg'
import TestimonialMarquee from '../../../TestimonialMarquee.jsx'
import Testimonials from '../../../Testimonials.jsx'
import WhatsAppChat from '../CommonComponents/WhatsappComponent/WhatsappComponent.jsx'

export const Home = () => {
    const themeSectionRef = useRef(null);
    const practiceSectionRef = useRef(null);
    const testimonialsSectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                }
            });
        }, observerOptions);

        const sections = [themeSectionRef.current, practiceSectionRef.current, testimonialsSectionRef.current];
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-container">
            {/* Theme Image Section */}
            <section ref={themeSectionRef} className="theme-section fade-in">
                <div className="theme-background">
                    <img src={frontPageImage} alt="Global Pet Hospital" className="theme-image" />
                    <div className="theme-overlay"></div>
                </div>
                <div className="theme-content">
                    <div className="theme-text-container">
                        <h1 className="theme-title">GLOBAL PET HOSPITAL</h1>
                        <p className="theme-subtitle">We care about your pet</p>
                        <div className="theme-cta">
                            <button className="cta-button primary">Book Appointment</button>
                            <button className="cta-button secondary">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="scroll-arrow"></div>
                </div>
            </section>

            {/* The Practice Section */}
            <section ref={practiceSectionRef} className="practice-section fade-in">
                <div className="practice-container">
                    <div className="practice-header">
                        <h2 className="practice-title">The Practice</h2>
                        <p className="practice-subtitle">Comprehensive pet care with compassion and expertise</p>
                    </div>
                    
                    <div className="practice-grid">
                        <div className="practice-card">
                            <div className="practice-card-image">
                                <img src={doctors} alt="Our Health Mission" />
                            </div>
                            <div className="practice-card-content">
                                <h3 className="practice-card-title">Our Health Mission</h3>
                                <p className="practice-card-text">
                                    Our experienced medical professionals put your pet's healing needs first. 
                                    We are proud to provide a high quality level of customer service, medical 
                                    experience and commitment to health and wellness. Our goal is to make your 
                                    pet feel better as quickly as possible.
                                </p>
                            </div>
                        </div>

                        <div className="practice-card">
                            <div className="practice-card-image">
                                <img src={machinesImage} alt="Experience and Professionalism" />
                            </div>
                            <div className="practice-card-content">
                                <h3 className="practice-card-title">Experience and Professionalism</h3>
                                <p className="practice-card-text">
                                    With 4 years of experience, our medical team will assess you and create 
                                    a custom recovery plan that's right for you. We understand the importance 
                                    of educating you on the most effective ways to take care of your pet, 
                                    so that it can heal quickly.
                                </p>
                            </div>
                        </div>

                        <div className="practice-card">
                            <div className="practice-card-image">
                                <img src={stethascpeImage} alt="Physicians Who Care" />
                            </div>
                            <div className="practice-card-content">
                                <h3 className="practice-card-title">Physicians Who Care</h3>
                                <p className="practice-card-text">
                                    Not only will our doctors treat your existing conditions, we also work 
                                    to maximise your prevention strategies. We strive to help you improve 
                                    your pet's quality of life, achieve pet's wellness goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section - Marquee Testimonial Card with Hover Effect */}
            <section ref={testimonialsSectionRef} className="testimonials-section fade-in">
                <div className="testimonials-container">
                    <h2 className="testimonials-title">What Our Clients Say</h2>
                    <TestimonialMarquee />
                </div>
            </section>

            <WhatsAppChat />
        </div>
    )
}

export default Home
