import React from 'react';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import './Main.css';

const Main = () => {
  return (
    <div>
      <Services />
      <Doctors />
    </div>
  );
};

export default Main;
