import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Home from '../container/Home';
import Details from '../container/Details';
import data from '../data/data.json';
import '../sass/App.scss';

class App extends React.Component {
  state = {
    flowerData: data
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
    return (
      <div className="container">
        <Router>
          <Navigation />
          <Switch>
            <Route
              path="/details/:id"
              render={props => (
                <Details data={this.state.flowerData} {...props} addComment={this.addComment} />
              )}
            />
            <Route path="/" render={props => <Home data={this.state.flowerData} {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
