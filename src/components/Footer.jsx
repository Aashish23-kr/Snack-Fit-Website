import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Connect With Us</h2>

        <div className="social-icons">
          <span>📷 Instagram</span>
          <span>📘 Facebook</span>
          <span>🐦 Twitter</span>
          <span>▶️ YouTube</span>
        </div>
      </div>

      <div className="footer-middle">
        <h3>Office Address</h3>
        <p>📍 Dehradun, Uttarakhand, India</p>
      </div>

      <div className="footer-bottom">
        <h3>Suggestions</h3>

        <div className="suggestion-box">
          <input
            type="text"
            placeholder="Share your suggestions..."
          />

          <button>Submit</button>
        </div>
      </div>

      <p className="copyright">
        © 2026 Snack Fit. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;