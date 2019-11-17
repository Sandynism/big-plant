import React from 'react';

const Description = props => {
  return (
    <div className="flower__container">
      <hr className="hr-line" />

      <div className="flower__name">
        {/* link to flower page */}
        <a href="/">{props.name}</a>
      </div>
      <div className="flower__description">{props.description}</div>
    </div>
  );
};

export default Description;
