import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({
  index,
  flowerInfo: { id, url, flowerName, person, description }
}) => {
  return (
    <div className={`card grid--${index}`}>
      <div className="card__image" key={id}>
        <div className="card__image--inner">
          <div className="card__image--front">
            <img src={url} alt={flowerName} />
          </div>
          <div className="card__image--back">
            <p>{person}'s Favorite</p>
          </div>
        </div>

        <div className="card__name">
          {/* router link to flower page */}
          <Link to={`/details/${id}`}>
            <span className="card__name--title">{flowerName}</span>
          </Link>
        </div>
        <div className="card__description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
