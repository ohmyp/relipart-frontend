import './Questions.scss'
import React from 'react';
import Button from '../Button/Button'
const Questions = () => {
  return (
    <div className='questions__outline'>
      <section className= "questions">
        <h3 className='questions__subtitle'>У вас есть вопросы?</h3>
        <h2 className='questions__title'>Мы вам обязательно ответим!</h2>
        <p className='questions__text'>
        Дорогие партнеры! Если у вас появились вопросы о возможности сотрудничества с нашей компанией или по иной причине, вы можете отправить сообщение на почту send@relipart.ru. В течение дня наши специалисты свяжутся с вами.
        </p>
        <a href="#cta"><Button>Связаться</Button></a>
      </section>
    </div>
  );
}

export default Questions;
