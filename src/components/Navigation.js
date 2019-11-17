import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

class Navigation extends React.Component {
  render() {
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
            <div className="navigation__dropdown--mobile">
              <div className="navigation__mobilebtn">&#9776;</div>
              <div className="navigation__dropdown-content">
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
  }
}

export default Navigation;
