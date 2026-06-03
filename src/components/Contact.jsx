import React from 'react';

const Contact = () => {
  return (
    <div className="contact-outer">
      <div className="contact-section">
      <h2>Have a Question?</h2>
      <p className="contact-subtitle">
        We'd love to hear from you.
      </p>

      <div className="contact-info">
        <p>📧 support@snackfit.com</p>
        <p>📞 +91 98765 43210</p>
      </div>

      <form className="contact-form">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <textarea
          rows="5"
          placeholder="Your message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;