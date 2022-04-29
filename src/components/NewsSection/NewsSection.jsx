import "./NewsSection.scss";
import React from "react";
import { NewsCard, Loading } from "../components";

import arrowPath from "../../static/arrow.svg";

const News = ({ posts, handlePopup, isLoading }) => {
  const [currentPost, setCurrentPost] = React.useState(6);

  function handleNumberOfposts() {
    setCurrentPost(currentPost + 4);
    if( currentPost + 4 >= posts.length ){
      document.querySelector('.news-section__button').disabled=true;
    }
  }

  function handlePopupOpen (post){
    handlePopup(post)
  }

  return (
    <section className="news-section">
      <h2 className="news-section__title">Новости</h2>
      {isLoading ? <Loading/> : posts.map((post) => {
        return post.id < currentPost ? (
          <NewsCard key={post.id} post={post} handlePopupOpen={handlePopupOpen}/>
        ) : (
          ""
        );
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
