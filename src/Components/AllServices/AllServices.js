import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const AllServices = () => {
  const [services] = useServices();
  // console.log('~ services', services);

  return (
    <Container fluid className="pt-5 services-container">
      <h2 className="text-center fw-bolder py-3">Our All Services</h2>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {services?.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default AllServices;
