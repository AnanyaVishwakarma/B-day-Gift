import React from 'react';
import Card from '../Card/Card';
import './CardGrid.css';

const CardGrid = ({ onPhotoClick, onEnvelopeClick, onSongsClick, onMessageClick }) => {
  return (
    <div className="card-grid">
      <Card
        icon="📸"
        title="Photo Memories"
        description="Click to see our special moments together!"
        onClick={onPhotoClick}
      />
      
      <Card
        icon="✉️"
        title="Secret Envelope"
        description="A special message just for you!"
        onClick={onEnvelopeClick}
      />

      <Card
        icon="🎵"
        title="Our Playlist"
        description="Songs that remind me of us!"
        onClick={onSongsClick}
      />

      <Card
        icon="💌"
        title="Miss You Message"
        description="A sweet message just for you!"
        onClick={onMessageClick}
      />
    </div>
  );
};

export default CardGrid; 