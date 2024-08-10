import React from "react";
import { reviews } from "./reviewsData"
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import "./Testimonial.css";
import Quote from "../../../../../assets/BlockQuote.svg"

const Testimonials = () => {
    return (
        <section className="testimonial-container">
            <div className="title">
                <h1>
                    Testimonials!!
                </h1>
                <p>
                    What are our clients saying!
                </p>
            </div>
            <div className="slider-container">
                <blockquote>
                    <img src={Quote} className="quote top-quote" alt=""></img>
                    <img src={Quote} className="quote bottom-quote" alt=""></img>
                </blockquote>
                <Splide options={{perPage : 1, type:'loop', speed: 2000, autoplay: true}}>
                    {
                        reviews.map((review) => (
                            <SplideSlide key={review.id}>
                                <image src={review.image} className="review-img" alt="" />
                                <div className="content">
                                    <p className="text">{review.text}</p>
                                    <div className="info">
                                        <div className="rating"></div>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                    </div>
                                    <p className="user">
                                        {review.name}
                                    </p>
                                </div>
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>
        </section>
    )
}

export default Testimonials;
