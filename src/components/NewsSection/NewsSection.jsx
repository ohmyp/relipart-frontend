import "./NewsSection.scss";
import React from "react";
import { NewsCard } from "../components";

import arrowPath from "../../static/arrow.svg";

const News = ({ posts, handlePopup }) => {
  const [currentPost, setCurrentPost] = React.useState(6);

  function handleNumberOfposts() {
    setCurrentPost(currentPost + 4);
  }

  function handlePopupOpen (post){
    handlePopup(post)
  }

  return (
    <section className="news">
      <h2 className="news__title">Новости</h2>
      {posts.map((post) => {
        return post.id < currentPost ? (
          <NewsCard key={post.id} post={post} handlePopupOpen={handlePopupOpen}/>
        ) : (
          ""
        );
      })}
      <button className="news__button">
        <img
          className="news__button_image"
          src={arrowPath}
          onClick={handleNumberOfposts}
        />
      </button>
    </section>
  );
};

export default News;
