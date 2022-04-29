import "./Managment.scss";
import React from "react";

const Mission = () => {
  return (
    <section className="managment">
      <h2 className="managment__title">Руководство</h2>
      <div className="managment__info-container">
        <div className="manager">
          <img className="manager__img" />
          <h3 className="manager__name"> Дружков Георгий Петрович</h3>
          <p className="manager__position">
            Генеральный директор OOO ПСК "Надежный партнер"
          </p>
        </div>
        <div className="quote">
          <p className="quote__text">
            Спустя 10 лет профессиональной деятельности в области
            архитектурно-строительного проектирования, мною было принято решение
            о создании собственной проектно-строительной компании, способной не
            только решать многопрофильные задачи от сбора исходно-разрешительной
            документации до утверждения проектных решений в органах экспертизы и
            ведения авторского надзора за строительством, но и самостоятельно
            осуществлять строительные и монтажные работы
          </p>
          <h3 className="quote__avtor"> Дружков Георгий Петрович</h3>
          <p className="quote__avtor-position">
            Генеральный директор OOO ПСК "Надежный партнер"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
