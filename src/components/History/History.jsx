import "./History.scss";
import React from "react";
import logoPath from "../../static/big_logo.svg";

const NewsCard = () => {
    const data = [
        {
            year: 2018,
            title: "Ключевые события 2018",
            text: "Учреждение Общество с ограниченной ответственностью «Проектно-Строительной Компании «Надёжный Партнёр» (ООО «ПСК «Надёжный Партнёр»). За 2018 год запроектировано дворовое благоустройство по двум адресам Петроградской стороны для МАМОМО «Чкаловское». Создан первый сайт компании и запущен Форум инженеров по согласованиям.",
        },
        {
            year: 2019,
            title: "Ключевые события 2019",
            text: "Для компании создается и внедряется корпоративный стиль с логотипом из переплетенных букв Н и П в устойчивую конструкцию в сине-оранжевых тонах, символизирующих две стихии, воду и камень, инфраструктурных гидротехнических объектов: будь то набережная, мост или пруд с берегоукреплением. Ориентированная на строительство в будущем, компания получила цветовое решение логотипа под стать униформе строителей: оранжевая каска, синий комбинезон. За 2019 год кроме МАМОМО «Чкаловское» у компании появляется три новых заказчика: ГЭТУ ЛЭТИ (проект по благоустройству дворовой территории военной кафедры), ООО «МИДАС» (проект противоаварийных работ стенки набережной) и ООО «Институт КИОВР» (проект берегоукрепления р. Перетна в Новгородской области).",
        },
        {
            year: 2020,
            title: "Ключевые события 2020",
            text: " В компании учреждается собственный медиаканал «Кругозор Проектировщика», посвященный градостроительной инженерии и вопросам архитектурно-строительном проектировании. На канале рассказываются истории мостов, набережных, парков с участием автора, проблематика согласований с ведомствами и службами и другие вопросы проектирования и эксплуатации объектов. Компания регистрирует патент на логотип и товарный знак медиаканала. В 2020 году среди прочих выполнена одна крупная работа по заказу ООО «Монтаж-Строй Северо-Запад» по проектированию дноуглубления участка акватории для маломерных судов на воздушной подушке МЧС России.",
        },
        {
            year: 2021,
            title: "Ключевые события 2021",
            text: "Компания становится членом саморегулируемой организации «Мастер-Проект». В компанию приходят новые специалисты. Заключаются договоры по разработке ППР на реставрацию с приспособлением для современного использования Северной куртины о. Кроншлот с ООО «Геоизол», разработки проектной документации на капитальный ремонт набережной кан. Грибоедова от Харламова моста до Ново-Никольского моста, правый берег с ООО «Саксум».\n",
        },
    ];

    const [currentPostId, setCurrentPostId] = React.useState(0);
    const [handClick, setHandClick] = React.useState(false);
    let timer;


    React.useEffect(() => {
        if (!handClick) {
            timer = setTimeout(handleAutoSwipe, 2000);
        }
        document.querySelectorAll(".history__years-item").forEach((element) => {
            element.classList.remove("history__years-item_active");
        });
        document
            .getElementById(currentPostId)
            .classList.add("history__years-item_active");
    }, [currentPostId, handClick]);


    function handleClickOnYear(e) {
        clearTimeout(timer)
        setHandClick(true);
        setCurrentPostId(e.target.id);
    }

    function handleAutoSwipe() {
        let counter = currentPostId + 1;
        if (counter >= data.length) counter = 0;
        setCurrentPostId(counter);
    }

    return (
        <section className="history">
            <div className="history__left-container">
                <img className="history__logo" src={logoPath} alt="logo"/>
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
