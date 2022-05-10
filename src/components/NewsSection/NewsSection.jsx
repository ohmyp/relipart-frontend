import "./NewsSection.scss";
import React from "react";
import { NewsCard, Loading } from "../components";

import arrowPath from "../../static/arrow.svg";

const News = ({ posts, handlePopup, isLoading, currentPost, setCurrentPost }) => {

  function handleNumberOfposts() {
    setCurrentPost(currentPost + 5);
  }

  function handlePopupOpen (post){
    handlePopup(post)
  }

  return (
    <section className="news-section">
      <h2 className="news-section__title">Новости</h2>
      {isLoading ? <Loading/> : posts.map((post) => {
           return <NewsCard key={post.id} post={post} handlePopupOpen={handlePopupOpen}/>
      })}
      <button className="news-section__button">
        <img
          className="news-section__button_image"
          src={arrowPath}
          onClick={handleNumberOfposts}
        />
      </button>
    </section>
  );
};

export default News;
