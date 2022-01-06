import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import Fade from 'react-reveal/Fade';

const AllDoctors = () => {
  const [doctors] = useDoctors();

  return (
    <Container fluid className="pt-5 services-container">
      <Fade bottom>
        <h2 className="text-center fw-bolder py-3">Our Doctors</h2>
      </Fade>

      <Container>
        <Fade right>
          <Row xs={1} md={2} lg={3} className="g-4">
            {doctors.map((doctor) => (
              <Doctor key={doctor.id} doctor={doctor} />
            ))}
          </Row>
        </Fade>
      </Container>
    </Container>
  );
};

export default AllDoctors;
