import React from 'react';
import { Header, Footer, Services, Questions, Objects, Partners, CallToAction, MainPicture } from '../components/components'
const Home = () => {

  return (
    <>
      <Header />
      <MainPicture />
      <Services />
      <Questions />
      <Objects />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home;
