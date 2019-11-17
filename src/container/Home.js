import React from 'react';
import Card from '../components/Card';

const Home = props => {
  const renderCards = () => {
    return props.data.map((flowerInfo, index) => {
      return <Card key={`flower-${flowerInfo.id}`} flowerInfo={flowerInfo} index={index + 1} />;
    });
  };

  console.log(props);

  return (
      <div className="grid">{renderCards()}</div>
  );
};

export default Home;
