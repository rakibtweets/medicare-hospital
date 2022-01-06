import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Service.css';
import { HashLink } from 'react-router-hash-link';
import { Fade } from 'react-reveal';

const Service = (props) => {
  const { id, serviceName, image, fullDescription } = props.service;
  return (
    <Col className="service-container">
      <Fade bottom cascade>
        <Card className="">
          <Card.Img className="service-img img-fluid" src={image} />
          <Card.Body>
            <Card.Title className="text-primary text-start h4">
              {serviceName}
            </Card.Title>
            <Card.Text className="card-text">
              {fullDescription.slice(0, 100)}
            </Card.Text>
            <HashLink smooth to={`/serviceDetails/${id}#details`}>
              <Button variant="primary">Details</Button>
            </HashLink>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};

export default Service;
