import React from 'react';

const Service = () => {
  return (
    <section id="about" className="service-section">
      <div className="service">
        <h3>What We Offer</h3>
      </div>

      <div className="outer">
        <div className="inner1">
          <h2>Other Brands</h2>
          <ul>
            <li>High in oil</li>
            <li>High in sugar</li>
            <li>Full of preservatives</li>
            <li>Low in nutrition</li>
          </ul>
        </div>

        <div className="inner2">
          <h2>Our Brand</h2>
          <ul>
            <li>Healthy snacks</li>
            <li>Tasty products</li>
            <li>Affordable options</li>
            <li>Fitness-friendly foods</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;