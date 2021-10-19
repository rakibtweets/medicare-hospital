import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="bg-dark text-white container-fluid text-white mt-5 p-5 sticky-bottom">
      <div className="footer-info row text-white">
        <div className="col-md-6 col-12 ">
          <h4 className="text-success fw-bold">
            {' '}
            <FaPlusCircle size="1.2em" className="text-success me-2" />
            MEDICARE PLUS
          </h4>
          <h6>Do You Need Help With Anything?</h6>
          <p className="text-text-white">
            Receive updates of hospital information during our service
          </p>
          <div className="search-area w-75 input-group">
            <input
              className="form-control "
              type="text"
              placeholder="Email Address"
            />
            <button className="btn btn btn-primary">Subscribe</button>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="links">
                <p className="text-white fw-bold">Layout</p>
                <div>
                  <Link className=" nav-link text-white" to="/home">
                    Home
                  </Link>
                  <Link className=" nav-link text-white" to="/about">
                    About
                  </Link>
                  <Link className=" nav-link text-white" to="/services">
                    Services
                  </Link>
                  <Link className=" nav-link text-white" to="/doctors">
                    Doctors
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="all-service">
                <div className="service-list">
                  <p className=" fw-bold">Speical Services</p>
                  <ul>
                    <li className=" text-white">Eye Care</li>
                    <li className=" text-white">Nephrologist</li>
                    <li className=" text-white">Rehabilitation Center</li>
                    <li className=" text-white">Eldery Care</li>
                    <li className=" text-white">Medical Counseling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right text-center pt-3">
        <p>&copy; 2021 MediCare. Designd By RakibHasan.</p>
      </div>
    </div>
  );
};

export default Footer;
