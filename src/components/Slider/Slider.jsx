import "./Slider.scss";
import React from "react";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import landscapePath from "../../static/landscape.png";
import documentationPath from "../../static/documentation.png";
import meliorationPath from "../../static/melioration.png";
import engineeringPath from "../../static/engineering.png";
import buildingPath from "../../static/building.png";
import foundamentPath from "../../static/foundament.png";
import flatsPath from "../../static/flats.png";
import smallHousePath from "../../static/small-house.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({}) => {
  return (
    <section className="slider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={landscapePath} />
            <p className="slider-card__title">Ландшафтная архитектура</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={documentationPath} />
            <p className="slider-card__title">
              Разработка сметной документации
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={meliorationPath} />
            <p className="slider-card__title">Мелиорация ландшафтов</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={engineeringPath} />
            <p className="slider-card__title">
              Инженерная подготовка территорий
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={buildingPath} />
            <p className="slider-card__title">Техническое обследование строительных конструкций</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={foundamentPath} />
            <p className="slider-card__title">
              Усиление фундаментов
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={smallHousePath} />
            <p className="slider-card__title">Малоэтажное загородное строительство</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card">
            <img className="slider-card__img" src={flatsPath} />
            <p className="slider-card__title">
              Перепланировка квартир  
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
