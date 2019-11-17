import React from 'react';
import data from '../data/data.json';

const Card = props => {
  const images = data.map(image => {
    return (
      <div className="card">
        <div className="flip-card" key={image.id}>
          <div className="flip-card--inner">
            <div className="flip-card--front">
              <img src={image.url} alt={image.flowerName} />
            </div>
            <div className="flip-card--back">
              <p>{image.person}'s Favorite</p>
            </div>
          </div>

          <hr className="hr-line" />
          <div className="card__name">
            {/* link to flower page */}
            <a href="/">{image.flowerName}</a>
          </div>
          <div className="card__description">{image.description}</div>
        </div>
      </div>
    );
  });

  return <div className="imageContainer">{images}</div>;
};

export default Card;
