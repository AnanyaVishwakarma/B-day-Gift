// components/MessageModal/MessageModal.js
import React from 'react';
import './MessageModal.css';

const MessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content message-modal">
        <div className="modal-header">
          <h3 className="modal-title">A Sweet Message</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="message-content">
          <p>Meet me soon,</p>
          <p>Miss you so much,</p>
          <p>Love you always! 💖</p>
        </div>
        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MessageModal;