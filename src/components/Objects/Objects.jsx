import './Objects.scss';
import React from 'react';

const Objects = ({ handlePopup, objectsData }) => {
  function openPopup(e) {
    console.log(e.target);
    handlePopup(e.target.id);
  }
  return (
    <section className="objects">
      <h2 className="objects__title">Наши объекты</h2>
      <div className="objects__objects">
        <div className="objects__objects-top object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[0].title}</p>
            <img
              id="0"
              className="object-image"
              src={objectsData[0].afterImg}
              alt="Изображение объекта 0"
            />
          </div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[1].title}</p>
            <img
              id="1"
              className="object-image"
              src={objectsData[1].afterImg}
              alt="Изображение объекта 1"
            />
          </div>
          <div className="object-color orange"></div>
        </div>

        <div className="objects__objects-bottom object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[2].title}</p>
            <img
              id="2"
              className="object-image"
              src={objectsData[2].afterImg}
              alt="Изображение объекта 2"
            />
          </div>
          <div className="object-color blue"></div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[3].title}</p>
            <img
              id="3"
              className="object-image"
              src={objectsData[3].afterImg}
              alt="Изображение объекта 3"
            />
          </div>
        </div>
      </div>
      <div className="objects__objects">
        <div className="objects__objects-top object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[4].title}</p>
            <img
              id="4"
              className="object-image"
              src={objectsData[4].afterImg}
              alt="Изображение объекта 4"
            />
          </div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[5].title}</p>
            <img
              id="5"
              className="object-image"
              src={objectsData[5].afterImg}
              alt="Изображение объекта 5"
            />
          </div>
          <div className="object-color orange"></div>
        </div>

        <div className="objects__objects-bottom object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[6].title}</p>
            <img
              id="6"
              className="object-image"
              src={objectsData[6].afterImg}
              alt="Изображение объекта 6"
            />
          </div>
          <div className="object-color blue"></div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">{objectsData[7].title}</p>
            <img
              id="7"
              className="object-image"
              src={objectsData[7].afterImg}
              alt="Изображение объекта 7"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objects;
