import React from 'react';
import { Header, Footer, Services, Questions, Objects, Partners, CallToAction, MainPicture, Button } from '../components/components'
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
      <Button>Связаться</Button>
      <Footer/>
    </>
  );
}

export default Home;
