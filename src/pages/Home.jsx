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

import beforeImg3 from "../static/objects/white_building.png";
import afterImg3 from "../static/objects/white_building.png";

import beforeImg4 from "../static/objects/brown_building.png";
import afterImg4 from "../static/objects/brown_building.png";

const Home = () => {
    const [selectedObject, setSelectedObject] = React.useState({});
    const [isObjectsPopupOpen, SetIsObjectsPopupOpen] = React.useState(false);

    const objectsData = [
        {
            beforeImg: beforeImg1,
            afterImg: afterImg1,
            text: "Консультационные услуги по первоочередным противоаварийным мероприятиям участка стенки набережной по заказу ООО «МИДАС» для нужд СПб ГБУ «Мостотрест» и Администрации Кронштадтского района. В рамках консультационных услуг было проведено дополнительное обследование аварийного участка стенки набережной канала Петровского дока, в результате которого выявилось нарушение каменной кладки из бутового заполнения тела стенки набережной. Было предложено провести инъектирование на глубину сооружения надводной части (2,5 м) с шагом 0,6 м для восстановления несущей способности каменной кладки. Также разработана система технических мероприятий, направленных на устранение последствий вывала каменной кладки на аварийном участке пломбированием. Проект согласован с КГИОП. Работы выполнены с понтона в 2020 г.",
        },
        {
            beforeImg: beforeImg2,
            afterImg: afterImg2,
            text: "По заказу Санкт-Петербургского государственного электротехнического университета «ЛЭТИ» им. В.И. Ульянова (Ленина) разработан проект по устройству плаца в асфальтобетонном покрытии со вспомогательными площадками для отработки техники построения студентами военной кафедры университета. Проектная документация согласована с КГА и Комитетом по благоустройству.",
        },
        {
            beforeImg: beforeImg3,
            afterImg: afterImg3,
            text: "Проект благоустройства элементов дворовой территории по заказу МАМОМО «Чкаловское»: замена асфальтобетонного покрытия на мощение тротуарной плиткой; предусмотрено устройство водоприемников под водосточные трубы, устройство гидроизоляции по краю мощения, регулировка крышек коверов, выравнивание бортового камня вдоль ограждения. Документация согласована с КГА. Работы выполнены в 2019 г.",
        },
        {
            beforeImg: beforeImg4,
            afterImg: afterImg4,
            text: "Проект благоустройства элементов дворовой территории по заказу МАМОМО «Чкаловское»: замена асфальтобетонного покрытия на мощение тротуарной плиткой; предусмотрено устройство водоприемных лотков под водосточные трубы, устройство гидроизоляции по краю мощения, регулировка крышек колодцев, установка облегченного бортового камня. Документация согласована с КГА. Работы выполнены в 2020 г.",
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
            <Header/>
            <MainPicture/>
            <Services/>
            <Questions/>
            <Objects handlePopup={openObjectsPopup}/>
            <Partners/>
            <CallToAction/>
            <Footer/>
            <ObjectsPopup
                object={selectedObject}
                onClose={closePopup}
                isOpen={isObjectsPopupOpen}
            />
        </>
    );
};

export default Home;
