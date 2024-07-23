import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = ({ phoneNumber, message }) => {
  // Encode the message to make it URL-friendly
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      <FaWhatsapp style={{ color: 'green', fontSize: '24px' }} />
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppLink;