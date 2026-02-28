import React from 'react';
import './PhotoModal.css';

// Put the array outside the component
const photos = [
  { id: 1, url: "/Assets/images/Photo1 (1).jpeg", caption: 'The Beauty with little hearts' },
  { id: 2, url: "/Assets/images/Photo1 (2).jpeg", caption: 'Best Rasmalai ever.' },
  { id: 3, url: "/Assets/images/Photo1 (3).jpeg", caption: 'Hands on cheek, my lips are jealous' },
  { id: 4, url: "/Assets/images/Photo1 (4).jpeg", caption: 'oh yeah lookin at me or the camera?' },
];

const PhotoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Our Memories</h3>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="photo-grid">
          {/* This is the magic part that loops through your array */}
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="photo-image"
              />
              <p className="photo-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
        
        <button className="modal-button" onClick={onClose}>
          Close Gallery
        </button>
      </div>
    </div>
  );
};

export default PhotoModal;