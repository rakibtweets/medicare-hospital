import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = (props) => {
  const { name, designation, image, fullDescription } = props.doctor;
  return (
    <Col className="service-container">
      <Card className="">
        <Card.Img className="doctor-img" src={image} />
        <Card.Body>
          <Card.Title className="text-primary text-start h4">{name}</Card.Title>
          <Card.Text className="card-text">
            <p className="fst-italic small">{designation}</p>
            <p>{fullDescription.slice(0, 100)}</p>
          </Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Doctor;
