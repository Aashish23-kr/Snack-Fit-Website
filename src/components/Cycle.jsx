import React from 'react';

const Lifecycle = () => {
  return (
    <div className="lifecycle">
      <h2 className="lifecycle-title">Our Product Journey</h2>

      <div className="lifecycle-container">
        <div className="stage">🌾 Farmers</div>
        <div className="arrow">→</div>

        <div className="stage">🏭 Processing</div>
        <div className="arrow">→</div>

        <div className="stage">❄️ Freeze Drying</div>
        <div className="arrow">→</div>

        <div className="stage">📦 Packaging</div>
        <div className="arrow">→</div>

        <div className="stage">🏬 Warehousing</div>
        <div className="arrow">→</div>

        <div className="stage">🚚 Delivery</div>
      </div>
    </div>
  );
};

export default Lifecycle;