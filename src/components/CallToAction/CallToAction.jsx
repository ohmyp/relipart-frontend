import './CallToAction.scss'
import React from 'react';

const CallToAction = () => {
  // TODO Фон блока
  return (
    <section className="cta" id='cta'>
      <h3 className="cta-subtitle">Полезные советы и персональные предложения</h3>
        <h2 className="cta-title">Мы свяжемся с вами и все обсудим!</h2>
        <form className="cta__form">
            <input type="text" className="cta__form-input" placeholder='Имя *'/>
            <input type="text" className="cta__form-input" placeholder='Телефон *'/>
            <button className="cta__form-button">Связаться</button>
        </form>

    </section>
  );
}

export default CallToAction;
