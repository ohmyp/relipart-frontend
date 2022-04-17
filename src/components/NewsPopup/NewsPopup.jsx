import "./NewsPopup.scss";

import exitIconPath from "../../static/form_exit-button.svg";

function NewsPopup({ isOpen, post, onClose }) {
  console.log(post.title)
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__exit-button"
          onClick={onClose}
        >
          <img
            className="popup__exit-button-image"
            src={exitIconPath}
            alt='Изображение кнопки "выйти"'
          />
        </button>
        <p className="popup__title">{post.title}</p>
        <p className="popup__text">{post.body}</p>
        <p className="popup__subtitle">{`${post.date.slice(8,10)}.${post.date.slice(5,7)}.${post.date.slice(0,4)}`}</p>
        
      </div>
    </div>
  );
}

export default NewsPopup;
