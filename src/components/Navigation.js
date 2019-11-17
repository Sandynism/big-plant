import React from 'react';
import logo from '../images/logo.png';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__header">
          <img src={logo} alt="BH Logo" className="navigation__logo" />
          <div className="navigation__name navigation__name--desktop">Big Plant</div>

          <div className="navigation__container">
            <div className="navigation__dropdown--left">
              <button className="navigation__dropbtn">About</button>
              <div className="navigation__dropdown-content">
                <a href="/">Our Team</a>
                <a href="/">Contact</a>
                <a href="/">Water Us</a>
              </div>
            </div>
            <div className="navigation__dropdown--right">
              <button className="navigation__dropbtn">Buy Us Flowers</button>
              <div className="navigation__dropdown-content">
                <a href="/">Thanks!</a>
              </div>
            </div>

            {/* mobile resp nav */}
            <div className="navigation__dropdown--mobile">
              <div className="navigation__mobilebtn">&#9776;</div>
              <div className="navigation__dropdown-content">
                <a href="/">Our Team</a>
                <a href="/">Contact</a>
                <a href="/">Water Us</a>
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
