import React from 'react';
import data from '../data/data.json';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

class Home extends React.Component {

  state = {
    flowerData: []
  }

  componentDidMount() {
    this.setState({
      flowerData: data
    })
  }

  renderCards = () => {
    return this.state.flowerData.map((flowerInfo, index) => {
      return <Card key={`flower-${flowerInfo.id}`} flowerInfo={flowerInfo} index={index + 1}/>
    })
  }

  render() {
    console.log(this.state.flowerData)

    return (
      <div className="container">
          <Navigation />
       
        <div className="grid">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default Home;