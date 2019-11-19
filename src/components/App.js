import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../container/Home';
import Details from '../container/Details';
import data from '../data/data.json';
import '../sass/App.scss';

class App extends React.Component {
  state = {
    flowerData: data,
    showMobileMenu: true,
  };


  toggleNav = e => {
    e.preventDefault();
    const toggle = document.querySelector('.navigation__dropdown-content--mobile');

    if (toggle.style.display === 'block') {
      toggle.style.display = 'none';
      this.setState(prevState => ({
        showMobileMenu: !prevState.showMobileMenu
      }));
    } else {
      toggle.style.display = 'block';
      this.setState(prevState => ({
        showMobileMenu: !prevState.showMobileMenu
      }));
    }
  };

  addComment = (comment, id) => {
    const newFlowerData = [...this.state.flowerData];
    newFlowerData.forEach(data => {
      if (parseInt(data.id) === parseInt(id)) {
        data.comments.unshift(comment);
      }
    });
    this.setState({ flowerData: newFlowerData });
  };

  render() {
    const {showMobileMenu, flowerData} = this.state
    return (
      <div className="container">
        <Router>
          <Navigation showMobileMenu={showMobileMenu} toggleNav={this.toggleNav} />
          <Switch>
            <Route
              path="/details/:id"
              render={props => (
                <Details data={flowerData} {...props} addComment={this.addComment} />
              )}
            />
            <Route path="/" render={props => <Home data={flowerData} {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
