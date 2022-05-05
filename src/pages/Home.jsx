import React from "react";
import {
  Header,
  Footer,
  Services,
  Questions,
  Objects,
  Partners,
  CallToAction,
  MainPicture,
  ObjectsPopup,
} from "../components/components";

import beforeImg1 from "../static/objects/embankment.png";
import afterImg1 from "../static/objects/embankment.png";

import beforeImg2 from "../static/objects/brick_building.png";
import afterImg2 from "../static/objects/brick_building.png";

import beforeImg3 from "../static/objects/embankment.png";
import afterImg3 from "../static/objects/embankment.png";

import beforeImg4 from "../static/objects/embankment.png";
import afterImg4 from "../static/objects/embankment.png";

const Home = () => {
  const [selectedObject, setSelectedObject] = React.useState({});
  const [isObjectsPopupOpen, SetIsObjectsPopupOpen] = React.useState(false);

  const objectsData = [
    {
      beforeImg: beforeImg1,
      afterImg: afterImg1,
      text: "Я работаю на отъебись, впрочем как и все здесь. Это еще один объект который мы хуево сделали и отдали 90% Эдику потому что так надо, он сказал что это очень хорошо а еще меня бьет жена.",
    },
    {
      beforeImg: beforeImg2,
      afterImg: afterImg2,
      text: "Я работаю на отъебись, впрочем как и все здесь. Это еще один объект который мы хуево сделали и отдали 90% Эдику потому что так надо, он сказал что это очень хорошо а еще меня бьет жена.",
    },
    {
      beforeImg: beforeImg3,
      afterImg: afterImg3,
      text: "Я работаю на отъебись, впрочем как и все здесь. Это еще один объект который мы хуево сделали и отдали 90% Эдику потому что так надо, он сказал что это очень хорошо а еще меня бьет жена.",
    },
    {
      beforeImg: beforeImg4,
      afterImg: afterImg4,
      text: "Я работаю на отъебись, впрочем как и все здесь. Это еще один объект который мы хуево сделали и отдали 90% Эдику потому что так надо, он сказал что это очень хорошо а еще меня бьет жена.",
    },
  ];

  function openObjectsPopup(objectId) {
    document.querySelector('.body').classList.add('body_non-scroll')
    SetIsObjectsPopupOpen(true);
    setSelectedObject(objectsData[objectId]);
  }

  function closePopup() {
    document.querySelector('.body').classList.remove('body_non-scroll')
    SetIsObjectsPopupOpen(false);
  }

  return (
    <>
      <Header />
      <MainPicture />
      <Services />
      <Questions />
      <Objects handlePopup={openObjectsPopup} />
      <Partners />
      <CallToAction />
      <Footer />
      <ObjectsPopup
        object={selectedObject}
        onClose={closePopup}
        isOpen={isObjectsPopupOpen}
      />
    </>
  );
};

export default Home;
