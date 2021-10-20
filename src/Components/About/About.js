import React from 'react';
import {
  FaRegClipboard,
  FaThumbsUp,
  FaUserCheck,
  FaUserTie,
} from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className="about-container container">
      <Fade right>
        <h2 className="text-center fw-bold p-3 text-success">About MediCare</h2>
      </Fade>
      <Fade left>
        <p className="text-secondary w-75 mx-auto text-center pb-5">
          MediCare is online based Hospital platform that teaches millions of
          stuent online in various topic, Through online classes and Courses
        </p>
      </Fade>
      <div className="about-MediCare-text row">
        <div className="col-md-6">
          <Fade left>
            <p>
              There are many variations of Mediacal treatments are available in
              MediCare Hospital, but the majority of our Doctors works are so
              much profession. have many yeares of Experice. We have some well
              trained certified doctors that train you and make you recover from
              injuries and health issues
            </p>
          </Fade>
          <Fade right>
            <p>
              There are many variations of Mediacal treatments are available in
              MediCare Hospital, but the majority of our Doctors works are so
              much profession. have many yeares of Experice. We have some well
              trained certified doctors that train you and make you recover from
              injuries and health issues
            </p>
          </Fade>
        </div>
        <div className="col-md-6">
          <Fade left>
            <p>
              There are many variations of Mediacal treatments are available in
              MediCare Hospital, but the majority of our Doctors works are so
              much profession. have many yeares of Experice. We have some well
              trained certified doctors that train you and make you recover from
              injuries and health issues
            </p>
          </Fade>
          <Fade right>
            <p>
              There are many variations of Mediacal treatments are available in
              MediCare Hospital, but the majority of our Doctors works are so
              much profession. have many yeares of Experice. We have some well
              trained certified doctors that train you and make you recover from
              injuries and health issues
            </p>
          </Fade>
        </div>
      </div>
      <div className="mediCare-promises pt-5 text-center">
        <Fade right>
          <h4 className="fw-bold">
            Why <span className="text-success ">MediCare Hostipal?</span>{' '}
          </h4>
        </Fade>
        <Fade left>
          <p className="w-50 mx-auto text-secondary">
            MediCare Hospital promises you Quality Servies, Better health
            checkup
          </p>
        </Fade>
        <div className="row g-4">
          <Fade left cascade>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div>
                  <FaUserCheck className=" icon text-primary py-3" />
                </div>
                <h4>Experience</h4>
                <p className="text-secondary">
                  Our Doctors have years of Experice and have medical
                  achivements
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div>
                  <FaUserTie className=" icon text-primary py-3" />
                </div>
                <h4>Professionality</h4>
                <p className="text-secondary">
                  We work professionaly,So that you can delivery servies as we
                  care
                </p>
              </div>
            </div>
          </Fade>
          <Fade right cascade>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div>
                  <FaThumbsUp className=" icon text-primary py-3" />
                </div>
                <h4>Guarantee</h4>
                <p className="text-secondary">
                  We Guarantee you quality of content and tremendous support
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <div>
                  <FaRegClipboard className=" icon text-primary py-3" />
                </div>
                <h4>Quality</h4>
                <p className="text-secondary">
                  We provide you you helpful resourses and Quality content
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
