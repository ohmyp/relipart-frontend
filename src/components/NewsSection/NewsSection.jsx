import "./NewsSection.scss";
import React from "react";
import { NewsCard } from '../components';

import arrowPath from "../../static/arrow.svg"

const News = () => {
  return (
    <section className="news">
      <h2 className="news__title">Новости</h2>
      <NewsCard
        date="01.04.2022"
        title="Убийство на допсе по матану"
        subtitle="Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно"
      />
      <NewsCard
        date="21.02.2022"
        title="Убийство в восточном экспрессе"
        subtitle="Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно"
      />
      <NewsCard
        date="20.02.2022"
        title="Убийство в Канзасе"
        subtitle="Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно"
      />
      <NewsCard
        date="01.01.2022"
        title="Убийство на Ниле"
        subtitle="Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно Ничего не понятно, но очень интересно"
      />
      <button className="news__button"><img src={arrowPath}/></button>
    </section>
  );
};

export default News;
