import React from 'react'
import WhatsAppLink from './WhatsAppLink';

export const Contact = () => {
 
  const phoneNumber = '919663773610'; // Replace with the actual phone number
  const message = 'Hello';
  
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <center>
        <h1>Contact Us</h1>
          <div style={{ marginBottom: '20px' }}>
            <h2>Global Pet Hospital </h2>
            <p>Sarjapur - Marathahalli Road,</p>
            <p>opposite to D mart, vinayaka nagar, Sarjapura,</p>
            <p>Bengaluru, Karnataka, India</p>
            <p>Phone: +91 9663773610</p>
            <p>Email: contact@company.com</p>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <h2>Timings </h2>
            <p>Monday - Friday: 8AM–10PM</p>
            <p>Saturday - Sunday: 8AM–10PM (It may vary)</p>
            <p>Emergency Service: 24/7</p>
       
          </div>
      <div>
        <div>
          <h1>WhatsApp</h1>
            <WhatsAppLink phoneNumber={phoneNumber} message={message} />
        </div>
        <h2>Location</h2>
        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.7299974739713!2d77.7784269!3d12.8607078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae739861f03d59%3A0x99e282db533c7775!2sGlobal%20Pet%20Hospital!5e0!3m2!1sen!2sin!4v1721063634980!5m2!1sen!2sin"
                width="1200"
                height="800"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
      </div>
      </center>
      
      
    </div>
  );
};

export default Contact;