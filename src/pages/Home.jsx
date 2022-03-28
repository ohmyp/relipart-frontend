import React from 'react';
import { Header, Footer, Services, Questions, Objects, Partners, CallToAction, MainPicture } from '../components/components'
const Home = () => {


  return (
    <>
      <Header/>
      <MainPicture></MainPicture>
      <Services></Services>  
      <Questions></Questions>    
      <Objects></Objects>
      <Partners></Partners>
      <CallToAction></CallToAction>
      <Footer/>
    </>
  );
}

export default Home;
