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

import beforeImg5 from "../static/objects/embankment.png";
import afterImg5 from "../static/objects/embankment.png";

import beforeImg6 from "../static/objects/brick_building.png";
import afterImg6 from "../static/objects/brick_building.png";

import beforeImg7 from "../static/objects/white_building.png";
import afterImg7 from "../static/objects/white_building.png";

import beforeImg8 from "../static/objects/brown_building.png";
import afterImg8 from "../static/objects/brown_building.png";

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
        {
            beforeImg: beforeImg5,
            afterImg: afterImg5,
            text: 'Для нужд ГКУ «Управление строительства Ленинградской области» и ГУ МЧС по заказу ООО «Монтаж-Строй Северо-Запад» в рамках корректировки проектной документации, разработанной ООО «БАЛТПРОЕКТ», выполнены проектно-изыскательские работы по дноуглублению с устройством слипа, включающего в себя гидротехнические и конструктивные решения укрепления подводного откоса, мероприятия по охране окружающей среды, технологические решения по производству работ дноуглубления. Проектная документация согласована с Росрыболовством. Работы выполнены в 2021 г.',
        },
        {
            beforeImg: beforeImg6,
            afterImg: afterImg6,
            text: 'Для нужд администрации г. Старая Русса по заказу ООО «НТЦ «Северо-Запад Проект» в рамках корректуры проектной документации разработан раздел «Схема планировочной организации земельного участка» в составе краткой пояснительной записки, решений по благоустройству с элементами озеленения (дендроплан), разбивочно-посадочного чертежа, чертежа по вертикальной планировки с картограммой земляных масс, ведомости объемов работ по озеленению. Работы выполнены в 2021 г.',
        },
        {
            beforeImg: beforeImg7,
            afterImg: afterImg7,
            text: 'Для нужд администрации Кронштадтского района по заказу ООО «МИДАС» выполнена проверка проектной документации с корректировкой ведомостей объемов работ на ремонтно-реставрационные работы с приспособлением для современного использования здания школы.',
        },
        {
            beforeImg: beforeImg8,
            afterImg: afterImg8,
            text: 'Для нужд Минобороны РФ по заказу ООО «ГЕОИЗОЛ Проект» выполнена корректировка раздела «Проект организации строительства» в части описания технологических процессов с разработкой чертежей по Северной куртине. Определена технология работ по бетонированию Северной куртины и берегоукреплению 257 п.м, определена технология подъёма посторонних предметов со дна акватории, разработаны чертежи по СВСиУ',
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
