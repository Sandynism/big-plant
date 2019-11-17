import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="details__image">
          <img src="/" alt="flowerName" />
        </div>
        <div className="details__image-name">Flower name goes here</div>
        <div className="details__person-name">Favorite Big Human</div>
        <div className="details__content">Content goes here</div>
        {/* <div className="details__comments">
          <div className="details__comments-input"></div>
          <div className="details__comments-view"></div>
        </div> */}
        {/* comment component goes here */}
      </div>
    );
  }
}

export default Details;
