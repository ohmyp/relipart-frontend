import "./ObjectsPopup.scss";

import exitIconPath from "../../static/form_exit-button.svg";

function NewsPopup({ isOpen, object, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__exit-button" onClick={onClose}>
          <img
            className="popup__exit-button-image"
            src={exitIconPath}
            alt='Изображение кнопки "выйти"'
          />
        </button>

        <div className="popup__images">
          <div className="popup__image-block">
            <img className="popup__image" src={object.beforeImg} />
            <p className="popup__img-subtitle">До проведения работ</p>
          </div>

          <div className="popup__image-block">
            <img className="popup__image" src={object.afterImg} />
            <p className="popup__img-subtitle">После проведения работ</p>
          </div>
        </div>

        <p className="popup__text">{object.text}</p>
      </div>
    </div>
  );
}

export default NewsPopup;
