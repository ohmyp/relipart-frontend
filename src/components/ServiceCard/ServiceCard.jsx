import React from 'react';
import './ServiceCard.scss';
const Servicecard = ({ title, image }) => {
  return (
    <div className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__text-wrapper">
        <p className="card__text">{title}</p>
      </div>
    </div>
  );
};

export default Servicecard;
