// components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = ({ nickname }) => {
  return (
    <header className="birthday-header">
      <h1 className="header-title">🎂 Happy Birthday</h1>
      <h2 className="header-subtitle">{nickname}! 🎉</h2>
      <div className="header-sparkle">
        <span className="sparkle-icon">✨</span>
      </div>
    </header>
  );
};

export default Header;