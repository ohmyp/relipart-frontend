import "./Objects.scss";
import React from "react";
import embankmentPath from "../../static/objects/embankment.png";
import brickBuildtPath from "../../static/objects/brick_building.png";
import whiteBuildPath from "../../static/objects/white_building.png";
import brownBuildingPath from "../../static/objects/brown_building.png";
const Objects = ({handlePopup}) => {
    function openPopup (e) { 
        console.log(e.target)
        handlePopup(e.target.id)
    }

    return (
    <section className="objects">
      <h2 className="objects__title">Наши объекты</h2>
      <div className="objects__objects">
        <div className="objects__objects-top object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
              Стенка канала Петровского дока, участок №3, 2019 г.
            </p>
            <img id='0' className="object-image" src={embankmentPath} alt="Изображение объекта 0" />
          </div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Дворовая территория дома №37Б литер А по ул. Профессора Попова, ЛЭТИ, 2019 г.
            </p>
            <img id='1' className="object-image" src={brickBuildtPath} alt="Изображение объекта 1" />
          </div>
          <div className="object-color orange"></div>
        </div>

        <div className="objects__objects-bottom object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Дворовая территория дома №45 по ул. Ленина, 2018 г.
            </p>
            <img id='2' className="object-image" src={whiteBuildPath} alt="Изображение объекта 2" />
          </div>
          <div className="object-color blue"></div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Дворовая территория дома №50 по Каменноостровскому проспекту, 2019 г.
            </p>
            <img id='3' className="object-image" src={brownBuildingPath} alt="Изображение объекта 3" />
          </div>
        </div>
      </div>
      <div className="objects__objects">
        <div className="objects__objects-top object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Дноуглубление участка акватории в рамках проектной документации и причал в г. Новая Ладога Волховского муниципального района Ленинградской области", 2020 г.
            </p>
            <img id='4' className="object-image" src={embankmentPath} alt="Изображение объекта 4" />
          </div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Корректура проектной документации «Благоустройство наб. Достоевского с частичным берегоукреплением», г.Старая Русса, наб. Достоевского, 2021 г
            </p>
            <img id='5' className="object-image" src={brickBuildtPath} alt="Изображение объекта 5" />
          </div>
          <div className="object-color orange"></div>
        </div>

        <div className="objects__objects-bottom object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Консультационные услуги по объекту "Проектная документация по сохранению объекта культурного наследия «Реальное училище», г. Кронштадт, ул. Андреевская, д.7, 2021г.
            </p>
            <img id='6' className="object-image" src={whiteBuildPath} alt="Изображение объекта 6" />
          </div>
          <div className="object-color blue"></div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
            Корректировка раздела ПОС для реконструкции с элементами реставрации с приспособлением к современному использованию объекта федерального значения «Форт «Кроншлот», I этап, г. Кронштадт, 2022 г.
            </p>
            <img id='7' className="object-image" src={brownBuildingPath} alt="Изображение объекта 7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objects;
