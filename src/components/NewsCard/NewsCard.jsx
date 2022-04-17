import "./NewsCard.scss";
import React from "react";


const NewsCard = ({ post, handlePopupOpen }) => {
  function clickOnPost(){
    handlePopupOpen(post)
    console.log('клик 1')
  }
  return (
    <div className="news-card" onClick={clickOnPost}>
      <div className="news-card__container">
        <p className="news-card__date">{`${post.date.slice(8,10)}.${post.date.slice(5,7)}.${post.date.slice(0,4)}`}</p>
        <div className="news-card__info-container">
          <h3 className="news-card__title">{post.title}</h3>
          <p className="news-card__subtitle">{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
