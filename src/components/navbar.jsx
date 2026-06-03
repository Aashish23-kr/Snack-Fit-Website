import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./logo.png" alt="Snack Fit Logo" className="logo" />
        <h2 className="brand-name">Snack Fit</h2>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navbar-right ${open ? 'show' : ''}`}>
        <a href="#about">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Cart</a>
        <a href="#">Orders</a>

        <input
          type="text"
          placeholder="Search products..."
          className="search-box"
        />

        <a href="#" className='signin'>Sign In</a>
      </div>
    </nav>
  );
};

export default Navbar;