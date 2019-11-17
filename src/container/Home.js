import React from 'react';
import logo from '../images/logo.png';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img src={logo} alt="BH Logo" className="header__logo" />
          <div className="header__name">Big Plant</div>
          <Navigation />
        </div>
        <div className="grid">
          <Card />
        </div>
      </div>
    )
  }
}

export default Home;