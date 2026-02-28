// App.js
import React, { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CardGrid from "./components/CardGrid/CardGrid.jsx";
import PhotoModal from "./components/PhotoModal/PhotoModal.jsx";
import PasswordModal from "./components/PasswordModal/PasswordModal.jsx";
import VintageLetter from "./components/VintageLetter/VintageLetter.jsx";
import SongsModal from "./components/SongsModal/SongsModal.jsx";
import MessageModal from "./components/MessageModal/MessageModal.jsx";
import "./App.css";

function App() {
  const [nickname] = useState("Rasmalai");
  const [showPhotos, setShowPhotos] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showSongs, setShowSongs] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div className="app">
      <Header nickname={nickname} />
      <main className="app-main">
        <CardGrid
          onPhotoClick={() => setShowPhotos(true)}
          onEnvelopeClick={() => setShowPasswordModal(true)}
          onSongsClick={() => setShowSongs(true)}
          onMessageClick={() => setShowMessage(true)}
        />
      </main>

      <PhotoModal isOpen={showPhotos} onClose={() => setShowPhotos(false)} />

      <PasswordModal
        isOpen={showPasswordModal}
        onClose={() => setShowPasswordModal(false)}
        onPasswordSubmit={() => setShowLetter(true)}
      />

      <VintageLetter
        isOpen={showLetter}
        onClose={() => setShowLetter(false)}
        nickname={nickname}
      />
      <SongsModal isOpen={showSongs} onClose={() => setShowSongs(false)} />

      <MessageModal
        isOpen={showMessage}
        onClose={() => setShowMessage(false)}
      />
    </div>
  );
}

export default App;
