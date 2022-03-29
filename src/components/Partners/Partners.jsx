import './Partners.scss'
import React from 'react';
import geoizolPath from '../../static/Geoizol.png'
import lionPath from '../../static/Lion.png'
import mostotrestPath from '../../static/Mostotrest.png'

const Partners = () => {
  return (
    <section className= "partners">
      <h3 className='partners__subtitle'>Нам доверяют</h3>
      <h2 className='partners__title'>Наши заказчики</h2>
      <div className='partners__images'>
        <img className='partners__images-image' src={lionPath} alt="Герб со львом" /> 
        <img className='partners__images-image' src={geoizolPath} alt="Логотип компании Геоизол" /> 
        <img className='partners__images-image' src={mostotrestPath} alt="Логотип компании Мостотрест" /> 
      </div>
    </section>
  );
}

export default Partners;
