import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Services from '../Services/Services';
import './Main.css';

const Main = () => {
  return (
    <div>
      <Banner />
      <FeaturedService />
      <Services />
      <Doctors />
    </div>
  );
};

export default Main;
