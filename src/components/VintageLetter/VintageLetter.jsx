import React, { useState, useEffect } from 'react';
import './VintageLetter.css';

const VintageLetter = ({ isOpen, onClose, nickname }) => {
  const [displayText, setDisplayText] = useState("");
  
  const fullMessage = `My dearest Best Friend,

  On this special day, I wanted to take a moment to tell you how incredibly grateful I am to have you in my life. Your friendship has been one of the greatest gifts I've ever received.

  Remember all those times we laughed until we cried? Those moments are treasures I hold close to my heart. Your kindness, your humor, and your beautiful spirit make the world a better place.

  Today is your day—may it be filled with joy, laughter, and all the happiness you deserve. You've touched so many lives with your warmth and generosity.

  Here's to many more years of friendship, adventures, and creating beautiful memories together!`;

  useEffect(() => {
    if (isOpen) {
      let i = 0;
      setDisplayText(""); // Reset text when opened
      
      const interval = setInterval(() => {
        setDisplayText(fullMessage.slice(0, i));
        i++;
        if (i > fullMessage.length) clearInterval(interval);
      }, 30); // Speed of typing (ms per character)

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="letter-overlay">
      <div className="letter-container">
        <div className="letter-content">
          <div className="letter-header">
            <div className="letter-icon">💌</div>
            <h1 className="letter-title">My Dearest {nickname}</h1>
            <div className="letter-divider"></div>
          </div>

          <div className="letter-body">
            {/* The typewriter text renders here */}
            {displayText}
            
            {/* The signature appears only after typing starts/finishes */}
            {displayText.length > 10 && (
              <p className="letter-signature">
                With all my love,<br />
                Your Ananya.
              </p>
            )}
          </div>

          <button onClick={onClose} className="close-letter-button">
            Close Letter
          </button>
        </div>
      </div>
    </div>
  );
};

export default VintageLetter;