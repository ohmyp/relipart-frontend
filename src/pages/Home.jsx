import React from 'react';
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
} from '../components/components';
import objects from '../for_redaction/objects';

const Home = () => {
  const objectsData = [
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object0.text,
      title: objects.object0.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object1.text,
      title: objects.object1.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object2.text,
      title: objects.object2.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object3.text,
      title: objects.object3.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object4.text,
      title: objects.object4.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object5.text,
      title: objects.object5.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object6.text,
      title: objects.object6.title
    },
    {
      beforeImg: '',
      afterImg: '',
      text: objects.object7.text,
      title: objects.object7.title
    },
  ];

  const [selectedObject, setSelectedObject] = React.useState({});
  const [objectsForRender, setObjectsForRender] = React.useState([
    ...objectsData,
  ]);
  const [isObjectsPopupOpen, SetIsObjectsPopupOpen] = React.useState(false);
  React.useEffect(() => {
    // Тут происходит динамический импорт картинок и загрузка его в массив объектов
    let buffer = [];
    for (let i = 0; i < objectsData.length; i++) {
      buffer.push(
        import(`../static/objects/${objects[`object${i}`].pictureBefore}`)
          .then((module) => {
            objectsData[i].beforeImg = module.default;
            return import(
              `../static/objects/${objects[`object${i}`].pictureAfter}`
            );
          })
          .then((module) => {
            objectsData[i].afterImg = module.default;
          })
          .catch((err) => console.log(err))
      );
    }
    Promise.all([...buffer])
        .then(()=> setObjectsForRender(objectsData));
  }, []);

  function openObjectsPopup(objectId) {
    document.querySelector('.body').classList.add('body_non-scroll');
    SetIsObjectsPopupOpen(true);
    setSelectedObject(objectsForRender[objectId]);
  }

  function closePopup() {
    document.querySelector('.body').classList.remove('body_non-scroll');
    SetIsObjectsPopupOpen(false);
  }

  return (
    <>
      <Header />
      <MainPicture />
      <Services />
      <Questions />
      <Objects handlePopup={openObjectsPopup} objectsData={objectsForRender} />
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
