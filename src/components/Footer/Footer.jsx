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
                            <a href="">8 (812) 234-56-55</a>

                        </div>
                        <div className="footer__links-link">
                            <img src={phonePath} alt=""/>
                            <a href="">8 (812) 234-56-55</a>
                        </div>
                        <div className="footer__links-link">
                            <img src={phonePath} alt=""/>
                            <a href="">8 (812) 234-56-55</a>
                        </div>
                    </div>
                </div>
                <div className="footer__right">
                    <h5 className="footer__links-title">социальные сети</h5>
                    <div className="footer__links">
                        <div className="footer__links-link">
                            <img src={phonePath} alt=""/>
                            <a href="">8 (812) 234-56-55</a>
                        </div>
                        <div className="footer__links-link">
                            <img src={phonePath} alt=""/>
                            <a href="">8 (812) 234-56-55</a>
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
