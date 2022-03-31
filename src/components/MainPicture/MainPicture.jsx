import './MainPicture.scss'
import mainPicture_path from '../../static/main_picture.png'
import bigLogo_path from '../../static/big_logo.png'
const MainPicture = () => {
  return (
    <section className='mainPicture'>
      <img className='mainPicture__logo' src={bigLogo_path} alt="" />
      <img className='mainPicture__image' src={mainPicture_path} alt="" />
      <h1 className='mainPicture__title'>Вместе<br />открывать<br />перспективы</h1>
    </section>
  );
}

export default MainPicture;
