import React, { useState } from "react";
import "./PasswordModal.css";

const PasswordModal = ({ isOpen, onClose, onPasswordSubmit }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    // Prevent the page from refreshing on form submit
    if (e) e.preventDefault();
    
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        // 1. Trigger the letter to show
        onPasswordSubmit(); 
        // 2. Close this modal
        onClose();
        // 3. Reset state
        setPassword("");
      } else {
        setError("Incorrect password! Hint: The year we met?");
      }
    } catch (err) {
      console.error("Error in handleSubmit:", err);
      setError("Server is offline. Try running node server.js!");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content password-modal">
        <div className="modal-header password-header">
          <div className="password-icon">
            <span>🔒</span>
          </div>
          <h3 className="modal-title">Secret Envelope</h3>
          <p className="password-description">
            Enter the special password to reveal your message
          </p>
        </div>

        {/* Wrapping in a form allows the 'Enter' key to work */}
        <form className="password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                if(error) setError(""); // Clear error when user starts typing again
            }}
            placeholder="Enter password..."
            className="password-input"
            autoFocus
            disabled={loading}
          />

          {error && <p className="password-error">{error}</p>}

          <div className="password-buttons">
            <button
              type="submit"
              className="password-button password-button-primary"
              disabled={loading || !password}
            >
              {loading ? "Checking..." : "Unlock"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="password-button password-button-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;