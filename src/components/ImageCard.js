import React from 'react';
import Description from './Description';
import data from '../data/data.json';

const ImageCard = props => {
  const images = data.map(image => {
    return (
      <div className="card">
        <div className="flip-card" key={image.id}>
          <div className="flip-card--inner">
            <div className="flip-card--front">
              <img src={image.url} alt={image.flowerName} />
            </div>
            <div className="flip-card--back">
              <p>{image.person}'s Favorite Flower</p>
            </div>
          </div>

          <Description name={image.flowerName} description={image.description} />
        </div>
      </div>
    );
  });

  return <div className="imageContainer">{images}</div>;
};

export default ImageCard;
