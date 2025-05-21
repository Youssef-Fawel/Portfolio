import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-container">
        <h1>Thank You!</h1>
        <p>Your message has been received. I'll get back to you as soon as possible.</p>
        <Link to="/" className="back-button">Back to Home</Link>
      </div>
    </div>
  );
};

export default ThankYou;
