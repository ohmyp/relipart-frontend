import './Objects.scss'
import React from 'react';
import object1Path from '../../static/objects_images/1.png'
const Objects = () => {
  return (
    <section className="objects">
        <h2 className="objects__title">Наши объекты</h2>
        <div className="objects__objects">
            <div className="objects__objects-top object">
                <div className="object__info">
                    <p className="object__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim.</p>
                    <div className="object__info-background"></div>
                    <img className="object-image" src={object1Path} alt=""/>
                </div>
                <img className="object-image" src={object1Path} alt=""/>
                <div className="object-color orange"></div>
            </div>

            <div className="objects__objects-bottom object">
                <img className="object-image" src={object1Path} alt=""/>
                <div className="object-color blue"></div>
                <img className="object-image" src={object1Path} alt=""/>
            </div>
        </div>
    </section>
  );
}

export default Objects;
