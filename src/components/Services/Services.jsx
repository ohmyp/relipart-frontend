import './Services.scss'
import React from 'react';
import Servicecard from '../ServiceCard/ServiceCard';
import image1_path from '../../static/card_images/image1.png'
import image2_path from '../../static/card_images/image2.png'
import image3_path from '../../static/card_images/image3.png'
import image4_path from '../../static/card_images/image4.png'
import image5_path from '../../static/card_images/image5.png'
import image6_path from '../../static/card_images/image6.png'
import Button from '../Button/Button'
import {Link} from "react-router-dom";

const Services = () => {
    return (
        <section className='services'>
            <h2 className="services__title">Услуги</h2>
            <h3 className="services__subtitle">Наша работа это ваше спокойствие</h3>
            <div className="services__cards">
                <Servicecard title='Благоустройство внутридворовых территорий' image={image1_path}/>
                <Servicecard title='Ландшафтная архитектура' image={image2_path}/>
                <Servicecard title='Инженерная подготовка территории' image={image3_path}/>
                <Servicecard title='Перепланировка квартир' image={image4_path}/>
                <Servicecard title='Перепланировка коммерческих и производственных помещений' image={image5_path}/>
                <Servicecard title='Разработка сметной документации' image={image6_path}/>
            </div>
            <Link to='/services'><Button lined>Подробнее</Button></Link>
        </section>
    );
}

export default Services;
