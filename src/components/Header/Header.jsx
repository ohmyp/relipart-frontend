import './Header.scss'
import { Link, useHistory} from "react-router-dom";
import small_logo_path from '../../static/logo_small.png'
const Header = () => {   
    const path = useHistory().location.pathname;
    return (
        <header className='header'>
           <ul className="header__links">
               <li className="header__links-link"><Link to="./"><img className='header__logo' src={small_logo_path} alt="" /></Link></li>
               <li className={path==="/" ? "header__links-link selected" : "header__links-link"}><Link to="./">Главная</Link></li>
               <li className={path==="/news" ? "header__links-link selected" : "header__links-link"}><Link to="./news">Новости</Link></li>
               <li className={path==="/services" ? "header__links-link selected" : "header__links-link"}><Link to="./services">Услуги</Link></li>
               <li className={path==="/aboutus" ? "header__links-link selected" : "header__links-link"}><Link to="./aboutus">О нас</Link></li>
           </ul>
        </header>
    );
}

export default Header;
