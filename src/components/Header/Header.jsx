import './Header.scss'
import small_logo_path from '../../static/logo_small.png'
const Header = () => {   
    return (
        <header className='header'>
           <ul className="header__links">
               <li className="header__links-link"><a href=""><img className='header__logo' src={small_logo_path} alt="" /></a></li>
               <li className="header__links-link selected"><a href="">Главная</a></li>
               <li className="header__links-link"><a href="">Новости</a></li>
               <li className="header__links-link"><a href="">Услуги</a></li>
               <li className="header__links-link"><a href="">О нас</a></li>
           </ul>
        </header>
    );
}

export default Header;
