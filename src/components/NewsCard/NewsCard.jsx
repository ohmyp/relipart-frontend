import "./NewsCard.scss";
import React from "react";

const NewsCard = ({ date, title, subtitle }) => {
  return (
    <div className="news-card">
      <div className="news-card__container">
        <p className="news-card__date">{date}</p>
        <div className="news-card__info-container">
          <h3 className="news-card__title">{title}</h3>
          <p className="news-card__subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
