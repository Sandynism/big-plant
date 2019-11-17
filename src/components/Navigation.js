import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
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
      </div>
    );
  }
}

export default Navigation;
