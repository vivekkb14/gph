import React from 'react';
import './Contact.css';
// import whatsappsvg from "../../../../assets/whatsapp-svgrepo-com.svg"
// import whatsappsvg from "../../../../assets/whatsapp.png"
import whatsapp from "../../../../assets/Contact-us/whatsapp-white-logo-svgrepo-com.svg"

export const Contact = () => {
  const phoneNumber = '919663773610'; // Replace with the actual phone number
  const message = 'Hello';

  return (
    <div className="contact-container">
      <div className="grid-container">

        <div className="grid-item item1">
          <h1 className="contact-title">Contact Us</h1>
          <div className="contact-section">
            <h2>Global Pet Hospital</h2>
            <p>Sarjapur - Marathahalli Road,</p>
            <p>opposite to D mart, vinayaka nagar, Sarjapura,</p>
            <p>Bengaluru, Karnataka, India</p>
            <p>Phone: +91 9663773610</p>
            <p>Email: contact@company.com</p>
          </div>
        </div>
        <div className="grid-item item3">
          <div className="working-hours">
            <h1>Timings</h1>
            <p>Monday - Friday: 8AM–10PM</p>
            <p>Saturday - Sunday: 8AM–10PM (It may vary)</p>
            <p>Emergency Service: 24/7</p>
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank">
              <img src={whatsapp} className='whatsapp-icon'></img>
              {/* <p >Message us on WhatsApp</p> */}
              {/* <h1 className="whatsapp-title">Message us on WhatsApp</h1> */}
            </a>
          </div>

        </div>
        <div className="grid-item item2">
          <h2 className="location-title">Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7299974739713!2d77.7784269!3d12.8607078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae739861f03d59%3A0x99e282db533c7775!2sGlobal%20Pet%20Hospital!5e0!3m2!1sen!2sin!4v1721063634980!5m2!1sen!2sin&maptype=satellite"
            className="map-frame"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </div>

  );
};

export default Contact;
