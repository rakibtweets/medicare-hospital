import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css';
import Fade from 'react-reveal/Fade';

const Services = () => {
  const [services] = useServices();

  return (
    <Container fluid className="pt-5 services-container">
      <Fade bottom>
        <h2 className="text-center fw-bolder py-3">Our Services</h2>
      </Fade>
      <Container>
        <Link className="nav-link my-3 " to="/services">
          View All Services
        </Link>

        <Row xs={1} md={2} lg={3} className="g-4">
          {services.slice(0, 6).map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Services;
