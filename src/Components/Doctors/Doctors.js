import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
import Fade from 'react-reveal/Fade';

const Doctors = () => {
  const [doctors] = useDoctors();
  return (
    <Fade right>
      <Container fluid className="pt-5 services-container">
        <h2 className="text-center fw-bolder py-3">Our Doctors</h2>
        <Container>
          <Link className="nav-link my-3 " to="/doctors">
            View All Doctors
          </Link>
          <Row xs={1} md={2} lg={3} className="g-4">
            {doctors?.slice(0, 3).map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </Row>
        </Container>
      </Container>
    </Fade>
  );
};

export default Doctors;
