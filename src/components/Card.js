import React from 'react';

const Card = ({ index, flowerInfo: { id, url, flowerName, person, description, content, comments }} )=> {
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

          <hr className="hr-line" />
          <div className="card__name">
            {/* router link to flower page */}
            <a href="/">{flowerName}</a>
          </div>
          <div className="card__description">{description}</div>
        </div>
      </div>
    );
};

export default Card;
