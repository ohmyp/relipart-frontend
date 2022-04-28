import "./History.scss";
import React from "react";
import logoPath from '../../static/big_logo.svg'
const NewsCard = () => {
  const data = {
    2018: {
      title: "Че-то из 2018",
      text: "Если б мне платли каждый раз, каждый раз когда я думаю о тебе..."    
    },
    2019: {
      title: "Че-то из 2019",
      text: "Все без тебя не так, лечу к тебе я словно комета..."    
    },
    2020: {
      title: "Че-то из 2020",
      text: "Вокруг людей куча но меня не будет, я хочу чтоб ты почувствовал каково это..."    
    },
    2021: {
      title: "Че-то из 2021",
      text: "А горький вкус твоей любвьи меня убил, теперь без сил..."    
    }
  }
  const [post, setPost] = React.useState(data[2018]);
  function handleClickOnYear(e) {
    document.querySelectorAll(".history__years-item").forEach((element) => {
      element.classList.remove("history__years-item_active");
    });
    e.target.classList.add("history__years-item_active");
    setPost(data[e.target.id])
  }
  return (
    <section className="history">
      <div className="history__left-container">
        <img className="history__logo" src={logoPath}/>
        <h3 className="history__year">2018</h3>
        <p className="history__subtitle">Ключевые события</p>
      </div>
      <div className="history__right-container">
        <ul className="history__years-list">
          <li id="2018" className="history__years-item history__years-item_active" onClick={handleClickOnYear}>2018</li>
          <li id="2019" className="history__years-item" onClick={handleClickOnYear}>2019</li>
          <li id="2020" className="history__years-item" onClick={handleClickOnYear}>2020</li>
          <li id="2021" className="history__years-item" onClick={handleClickOnYear}>2021</li>
        </ul>
        <div className="state">
          <h4 className="state__title">{post.title}</h4>
          <p className="state__text">{post.text}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
