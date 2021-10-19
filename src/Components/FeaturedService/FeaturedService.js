import React from 'react';
import './FeaturedService.css';
import { FaBalanceScale, FaNotesMedical, FaUserMd } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const FeaturedService = () => {
  return (
    <Fade right>
      <div className="features-container text-center container mx-auto mt-4 row gx-3">
        <h2 className="text-center fw-bolder py-2">BEST HOSPITAL IN TOWN</h2>
        <h5 className=" text-secondary text-center mb-5">
          When It Comes to Health Care
        </h5>
        <div className="row g-3">
          <div className=" features  col-md-4 col-12 col-lg-4">
            <div className="text-center card p-3">
              <div>
                <FaUserMd className=" icon text-primary py-3" />
              </div>
              <div className="title text-center">
                <h6 className=" fw-bold mt-1">HealthCare Professionals</h6>
                <p className="text-seconday">
                  We have Professionals to care your health 24hrs
                </p>
              </div>
            </div>
          </div>
          <div className=" features col-md-4 col-12 col-lg-4">
            <div className="text-center card p-3">
              <div>
                <FaBalanceScale className=" icon text-primary py-3" />
              </div>
              <div className="title">
                <h6 className="fw-bold mt-1">Medical Excellence</h6>
                <p className="text-seconday">
                  Our Doctors are well certified and have achive medical
                  experiences
                </p>
              </div>
            </div>
          </div>
          <div className=" features col-md-4 col-12 col-lg-4">
            <div className=" text-center card p-3">
              <div>
                <FaNotesMedical className=" icon text-primary py-3" />
              </div>
              <div className="title">
                <h6 className="fw-bold mt-1">Latest Technologies</h6>
                <p className="text-seconday">
                  We have latest Technologies available in the World
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FeaturedService;
