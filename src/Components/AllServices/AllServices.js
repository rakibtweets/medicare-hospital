import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import Fade from 'react-reveal/Fade';

const AllServices = () => {
  const [services] = useServices();
  // console.log('~ services', services);

  return (
    <Container fluid className="pt-5 services-container">
      <Fade left>
        <h2 className="text-center fw-bolder py-3">Our All Services</h2>
      </Fade>

      <Container>
        <Fade right>
          <Row xs={1} md={2} lg={3} className="g-4">
            {services?.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </Row>
        </Fade>
      </Container>
    </Container>
  );
};

export default AllServices;
