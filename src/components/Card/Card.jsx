// components/Card/Card.js
import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <div className="card-icon">
          <span>{icon}</span>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;