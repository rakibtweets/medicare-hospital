import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className="landing-banner pt-1">
      <Carousel>
        <Carousel.Item>
          <div className="slide-1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-2">
            <div className=" d-flex flex-column align-items-start justify-content-center h-75 px-5">
              <h3 className=" fw-bold display-4 text-success">
                The Best Hospital <br /> In The Town
              </h3>
              <p className="fw-bold text-secondary fs-3 lh-4">
                Get the Best Professional Medical Help <br /> From Our Modern
                Hospital
              </p>
            </div>
          </div>

          <Carousel.Caption className="text-dark"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h4 className="fw-bold text-success text-center pt-3 text-uppercase display-5">
        Welcome To MediCare Plus
      </h4>
    </div>
  );
};

export default Banner;
