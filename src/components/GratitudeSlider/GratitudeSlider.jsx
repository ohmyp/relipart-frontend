import "./GratitudeSlider.scss";
import React from "react";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import midasGraduatePath from "../../static/gratitudes/midas.jpg";
import letiGraduatePath from "../../static/gratitudes/leti.jpg";
import montazhGraduatePath from "../../static/gratitudes/montazh-stroi.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({}) => {
  return (
    <section className="gratitudes-slider">
      <h2 className="gratitudes-slider__title">Благодарности</h2>
      <p className="gratitudes-slider__subtitle">
        Здесь Вы можете ознакомиться с благодарностями и отзывами, оставленными
        партнерами о ПСК “Надёжный партнер”
      </p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="gratitudes-slider-card__img"
            src={midasGraduatePath}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="gratitudes-slider-card__img" src={letiGraduatePath} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="gratitudes-slider-card__img"
            src={montazhGraduatePath}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
