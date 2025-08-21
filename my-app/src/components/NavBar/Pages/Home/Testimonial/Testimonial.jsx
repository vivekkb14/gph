import React, { useEffect, useRef } from "react";
import { reviews } from "./reviewsData.js"
import "./Testimonial.css";
import { FiStar } from 'react-icons/fi';
import { BsQuote } from 'react-icons/bs';

const Testimonials = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const scrollMarquee = () => {
            if (marquee.scrollLeft >= marquee.scrollWidth - marquee.clientWidth) {
                marquee.scrollLeft = 0;
            } else {
                marquee.scrollLeft += 1;
            }
        };

        const interval = setInterval(scrollMarquee, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">What Our Clients Say</h2>
                    <p className="testimonials-subtitle">Real experiences from pet parents who trust us</p>
                </div>
                
                <div className="testimonials-marquee-container">
                    <div className="testimonials-marquee" ref={marqueeRef}>
                        {[...reviews, ...reviews].map((review, index) => (
                            <div key={`${review.id}-${index}`} className="testimonial-card">
                                <div className="testimonial-card-header">
                                    <div className="testimonial-avatar">
                                        <div className="avatar-placeholder">
                                            {review.name.charAt(0).toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">{review.name}</h4>
                                        <div className="testimonial-rating">
                                            {[...Array(5)].map((_, i) => (
                                                <FiStar key={i} className="star-icon filled" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="quote-icon">
                                        <BsQuote />
                                    </div>
                                </div>
                                
                                <div className="testimonial-content">
                                    <p className="testimonial-text">{review.text}</p>
                                </div>
                                
                                <div className="testimonial-footer">
                                    <div className="google-style-badge">
                                        <svg className="google-icon" viewBox="0 0 24 24">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                        </svg>
                                        <span>Google Review</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;
