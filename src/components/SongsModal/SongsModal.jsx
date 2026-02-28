import React from 'react';
import './SongsModal.css';

const SongsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const songs = [
    { title: "Valam - Made in China", id: "bOBy4IKXxhc" },
    { title: "Diamond Ni - Jigar Saraiya", id: "xFQRO9Kv8Rs" },
    { title: "Perfect - Ed Sheeran", id: "cNGjD0VG4R8" },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content songs-modal">
        <div className="modal-header">
          <h3 className="modal-title">Dedicated Songs</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="songs-container">
          {songs.map(({ title, id }) => (
            <div key={id} className="song-card">
              <p className="song-title">🎶 {title}</p>
              <div className="video-responsive">
                <iframe
                  width="100%"
                  height="150"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <button className="modal-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SongsModal;