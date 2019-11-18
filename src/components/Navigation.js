import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Navigation = () => {
  const toggleNav = e => {
    const toggle = document.querySelector('.navigation__dropdown-content--mobile');
    if (toggle.style.display === 'block') {
      toggle.style.display = 'none';
    } else {
      toggle.style.display = 'block';
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__header">
        <Link to="/">
          <img src={logo} alt="BH Logo" className="navigation__logo" />
        </Link>
        <div className="navigation__name navigation__name--desktop">Big Plant</div>

        <div className="navigation__container">
          <div className="navigation__dropdown--left">
            <button className="navigation__dropbtn">About</button>
            <div className="navigation__dropdown-content">
              <span>Our Team</span>
              <span>Contact</span>
              <span>Water Us</span>
            </div>
          </div>
          <div className="navigation__dropdown--right">
            <button className="navigation__dropbtn">Buy Us Flowers</button>
            <div className="navigation__dropdown-content">
              <span>Thanks!</span>
            </div>
          </div>

          {/* mobile resp nav */}
          <div className="navigation__dropdown--mobile" onClick={toggleNav}>
            <div className="navigation__mobilebtn">&#9776;</div>
            <div className="navigation__dropdown-content--mobile">
              <span>Our Team</span>
              <span>Contact</span>
              <span>Water Us</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation__name navigation__name--mobile">Big Plant</div>
    </div>
  );
};

export default Navigation;
