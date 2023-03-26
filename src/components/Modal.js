// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-heading">Welcome to Your Effortless Store Creation Journey!</h2>
        <p className="modal-text">Content: We're thrilled to have you on board! Our cutting-edge platform is designed to make your merchandize store creation process a breeze. With just a few clicks, you'll be able to set up your dream store, customize it to your liking, and start selling your amazing products in no time.</p>
        <p>Here's what you can expect from our user-friendly platform:</p>
        <p>1. Easy Store Setup: Follow our step-by-step guide to create your store without any hassle.</p>
        <p>2. Customizable Themes: Choose from a wide range of stunning themes to make your store stand out.</p>
        <p>3. Seamless Inventory Management: Keep track of your products, orders, and customers with ease.</p>
        <p>4. Secure Payment Gateways: Offer your customers a safe and smooth shopping experience.</p>
        <p>5. Marketing Tools: Boost your sales with our built-in marketing features and integrations.</p>
        <p>Ready to kickstart your online merchandize store journey? Click 'Let's go!' and let the magic begin!</p>
        <div className="modal-buttons">
          <button className="modal-primary-button" onClick={onClose}>Let's go!</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;