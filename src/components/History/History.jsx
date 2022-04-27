import "./History.scss";
import React from "react";

const NewsCard = ({ post, handlePopupOpen }) => {
  function clickOnPost() {
    handlePopupOpen(post);
  }
  return (
    <section className="history">
      <div className="history__left-container">
        <img className="history__logo" />
        <h3 className="history__year">2018</h3>
        <p className="history__subtitle">Ключевые события</p>
      </div>
      <div className="history__right-container">
        <ul className="histiry__years-list">
          <li>2018</li>
          <li>2019</li>
          <li>2020</li>
          <li>2021</li>
        </ul>
        <div className="state">
          <h4 className="state__title">Заголовок</h4>
          <p className="state__text">
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст текст текст текст текст текст текст
            текст текст текст текст текст
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
