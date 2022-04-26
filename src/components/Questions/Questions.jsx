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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
        </p>
        <a href="#cta"><Button>Связаться</Button></a>
      </section>
    </div>
  );
}

export default Questions;
