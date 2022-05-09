import "./History.scss";
import React from "react";
import logoPath from "../../static/big_logo.svg";
const NewsCard = () => {
  const data = [
    {
      year: 2018,
      title: "Че-то из 2018",
      text: "Если б мне платли каждый раз, каждый раз когда я думаю о тебе...",
    },
    {
      year: 2019,
      title: "Че-то из 2019",
      text: "Все без тебя не так, лечу к тебе я словно комета...",
    },
    {
      year: 2020,
      title: "Че-то из 2020",
      text: "Вокруг людей куча но меня не будет, я хочу чтоб ты почувствовал каково это...",
    },
    {
      year: 2021,
      title: "Че-то из 2021",
      text: "А горький вкус твоей любвьи меня убил, теперь без сил...",
    },
  ];

  const [currentPostId, setCurrentPostId] = React.useState(0);
  const [handClick, setHandClick] = React.useState(false);
 let timer;


  React.useEffect(() => {
    if (!handClick){
      timer = setTimeout(handleAutoSwipe, 2000);
    }
    document.querySelectorAll(".history__years-item").forEach((element) => {
      element.classList.remove("history__years-item_active");
    });
    document
      .getElementById(currentPostId)
      .classList.add("history__years-item_active");
  },[currentPostId, handClick]);


  function handleClickOnYear(e) {
    clearTimeout(timer)
    setHandClick(true);
    setCurrentPostId(e.target.id);
  }

  function handleAutoSwipe () {
    let counter = currentPostId + 1;
    if (counter >= data.length) counter = 0;
    setCurrentPostId(counter);
  }

  return (
    <section className="history">
      <div className="history__left-container">
        <img className="history__logo" src={logoPath} />
        <h3 className="history__year">{data[currentPostId].year}</h3>
        <p className="history__subtitle">Ключевые события</p>
      </div>
      <div className="history__right-container">
        <ul className="history__years-list">
          <li
            id="0"
            className="history__years-item history__years-item_active"
            onClick={handleClickOnYear}
          >
            2018
          </li>
          <li
            id="1"
            className="history__years-item"
            onClick={handleClickOnYear}
          >
            2019
          </li>
          <li
            id="2"
            className="history__years-item"
            onClick={handleClickOnYear}
          >
            2020
          </li>
          <li
            id="3"
            className="history__years-item"
            onClick={handleClickOnYear}
          >
            2021
          </li>
        </ul>
        <div className="state">
          <h4 className="state__title">{data[currentPostId].title}</h4>
          <p className="state__text">{data[currentPostId].text}</p>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
