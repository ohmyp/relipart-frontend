import "./Objects.scss";
import React from "react";
import embankmentPath from "../../static/objects/embankment.png";
import brickBuildtPath from "../../static/objects/brick_building.png";
import whiteBuildPath from "../../static/objects/white_building.png";
import brownBuildingPath from "../../static/objects/brown_building.png";
const Objects = ({handlePopup}) => {
    function openPopup (e) { 
        console.log(e.target)
        handlePopup(e.target.id)
    }

    return (
    <section className="objects">
      <h2 className="objects__title">Наши объекты</h2>
      <div className="objects__objects">
        <div className="objects__objects-top object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
              tortor vitae pellentesque egestas quam pulvinar. Pellentesque
              porttitor velit sit pellentesque. Suspendisse donec pretium id
              dignissim.
            </p>
            <img id='0' className="object-image" src={embankmentPath} alt="" />
          </div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
              tortor vitae pellentesque egestas quam pulvinar. Pellentesque
              porttitor velit sit pellentesque. Suspendisse donec pretium id
              dignissim.
            </p>
            <img id='1' className="object-image" src={brickBuildtPath} alt="" />
          </div>
          <div className="object-color orange"></div>
        </div>

        <div className="objects__objects-bottom object">
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
              tortor vitae pellentesque egestas quam pulvinar. Pellentesque
              porttitor velit sit pellentesque. Suspendisse donec pretium id
              dignissim.
            </p>
            <img id='2' className="object-image" src={whiteBuildPath} alt="" />
          </div>
          <div className="object-color blue"></div>
          <div className="object__info" onClick={openPopup}>
            <p className="object__info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis
              tortor vitae pellentesque egestas quam pulvinar. Pellentesque
              porttitor velit sit pellentesque. Suspendisse donec pretium id
              dignissim.
            </p>
            <img id='3' className="object-image" src={brownBuildingPath} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objects;
