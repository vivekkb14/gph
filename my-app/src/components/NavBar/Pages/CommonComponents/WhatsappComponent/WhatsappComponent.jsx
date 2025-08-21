// components/WhatsAppChat.js
import React from 'react';
import './WhatsappComponent.css'; // Import the CSS file

const WhatsAppChat = () => {
  const phoneNumber = '919663773610'; // Replace with your number
  const message = 'Hi Global Pet Hospital, I would like to know more about your services!';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-container" onClick={handleClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      <span className="whatsapp-text">Chat Now</span>
    </div>
  );
};

export default WhatsAppChat;
