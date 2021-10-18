import './ServiceDetails.css';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-grid-carousel';
import Service from '../Service/Service';

const ServiceDetails = () => {
  const { id } = useParams();
  const [services] = useServices();
  const selectedService = services?.filter(
    (service) => service.id === parseInt(id)
  );
  return (
    <>
      <Container id="details" className="service-details pt-5 mb-5">
        <Row xs={1} lg={2} className="g-4">
          <Col className="col-md-12 col-lg-5">
            <img
              className=" img-fluid"
              src={selectedService[0]?.image}
              alt=""
            />
          </Col>
          <Col className=" mb-md-12 col-lg-7">
            <h4>{selectedService[0]?.serviceName}</h4>
            <p>{selectedService[0]?.fullDescription}</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <h3 className="fw-bold text-center my-5">Other Services</h3>
        {/* carousel start */}

        <Carousel
          cols={3}
          rows={1}
          gap={10}
          loop
          responsiveLayout={[
            {
              breakpoint: 992,
              cols: 3,
            },
            {
              breakpoint: 778,
              cols: 2,
            },
          ]}
          mobileBreakpoint={576}
        >
          {services.map((service) => (
            <Carousel.Item className="px-2">
              <Service key={service.id} service={service} />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* carousel end */}
      </Container>
    </>
  );
};

export default ServiceDetails;
