import './Objects.scss'
import React from 'react';
import embankmentPath from '../../static/objects/embankment.png';
import brickBuildtPath from '../../static/objects/brick_building.png'
import whiteBuildPath from '../../static/objects/white_building.png'
import brownBuildingPath from '../../static/objects/brown_building.png'
const Objects = () => {
    //TODO
    // В  <p className="object__info-text"> вставить название объекта
    // по клику будет попап как в новостях с описанием и фотками до/после
  return (
    <section className="objects">
        <h2 className="objects__title">Наши объекты</h2>
        <div className="objects__objects">
            <div className="objects__objects-top object">
                <div className="object__info">
                    <p className="object__info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim.</p>
                    <div className="object__info-background"></div>
                    <img className="object-image" src={embankmentPath} alt=""/>
                </div>
                <img className="object-image" src={brickBuildtPath} alt=""/>
                <div className="object-color orange"></div>
            </div>

            <div className="objects__objects-bottom object">
                <img className="object-image" src={whiteBuildPath} alt=""/>
                <div className="object-color blue"></div>
                <img className="object-image" src={brownBuildingPath} alt=""/>
            </div>
        </div>
    </section>
  );
}

export default Objects;
