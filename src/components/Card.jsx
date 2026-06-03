import React from 'react';

const Card = ({ image, name, rating, price }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={name}
        className="card-img"
      />

      <div className="card-content">
        <h3 className="card-title">{name}</h3>

        <p className="card-rating">
          ⭐ {rating}
        </p>

        <p className="card-price">
          ₹{price}
        </p>

        <button className="card-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;