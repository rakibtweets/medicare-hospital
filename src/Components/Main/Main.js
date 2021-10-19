import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Main.css';

const Main = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Doctors />
    </div>
  );
};

export default Main;
