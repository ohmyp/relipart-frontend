import './Header.scss'
import { Link, useHistory} from "react-router-dom";
import small_logo_path from '../../static/logo_small.png'
const Header = () => {   
    const path = useHistory().location.pathname;
    return (
        <header className='header'>
           <ul className="header__links">
               <li className="header__links-link"><a href=""><img className='header__logo' src={small_logo_path} alt="" /></a></li>
               <li className={path==="/" ? "header__links-link selected" : "header__links-link"}><Link to="./">Главная</Link></li>
               <li className={path==="/news" ? "header__links-link selected" : "header__links-link"}><Link to="./news">Новости</Link></li>
               <li className={path==="/services" ? "header__links-link selected" : "header__links-link"}> <Link to="./services">Услуги</Link></li>
               <li className={"header__links-link"}><a href="">О нас</a></li>
           </ul>
        </header>
    );
}

export default Header;
