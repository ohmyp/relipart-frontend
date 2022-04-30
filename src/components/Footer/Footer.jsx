import './Footer.scss';
import mailPath from '../../static/icons/mail-icon.svg'
import zenPath from '../../static/icons/zen-icon.svg'
import facebookPath from '../../static/icons/facebook-icon.svg'
import phonePath from '../../static/icons/phone-icon.svg'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__top">
                <div className="footer__left">
                    <h5 className="footer__links-title">контакты</h5>
                    <div className="footer__links">
                        <div className="footer__links-link">
                            <img src={phonePath} alt=""/>
                            <a href="">+7 (952) 363-07-29</a>

                        </div>
                        <div className="footer__links-link">
                            <img src={mailPath} alt=""/>
                            <a href="">send@relipart.ru</a>
                        </div>
                        <div className="footer__links-link">
                            <img src={mailPath} alt=""/>
                            <a href="">relipart@relipart.ru</a>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <h5 className="footer__links-title">социальные сети</h5>
                    <div className="footer__links">
                        <div className="footer__links-link">
                            <img src={zenPath} alt=""/>
                            <a href="https://zen.yandex.ru/profile/editor/krugozor_proekt">Яндекс.Дзен «Кругозор Проектировщика»</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <span href="" className="footer__bottom-text">(c) 2022 Надежный Партнер</span>
                <a href="" className="footer__bottom-text">Договор публичной офферты</a>
                <a href="" className="footer__bottom-text">Контрагентам</a>

            </div>
        </footer>
    );
}

export default Footer;
