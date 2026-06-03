import React, { useState } from 'react';

const Hero = () => {
    const [image, setImage] = useState(
      `${import.meta.env.BASE_URL}chips.png`
    );
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Nature's Crunch,
          <br />
          in every Munch
        </h1>

        <p>
          Discover nutritious snacks crafted to satisfy your cravings while
          supporting your healthy lifestyle.
        </p>
      </div>

      <div className="hero-right">
        <img
          src={image}
          alt="Snack Fit Chips"
          className="hero-image"
          onMouseEnter={() =>
          setImage(`${import.meta.env.BASE_URL}potato.png`)}
          onMouseLeave={() =>
          setImage(`${import.meta.env.BASE_URL}chips.png`)}
        />

        <div className="hero-buttons">
          <button className="btn-primary">Explore Categories</button>
          <button className="btn-secondary">New Arrivals</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;