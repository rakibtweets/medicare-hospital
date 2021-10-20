import React, { useState } from 'react';
import { Col, Container, Modal, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDoctors from '../../Hooks/useDoctors';
import './DoctorDetails.css';
import Carousel from 'react-grid-carousel';
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import Doctor from '../Doctor/Doctor';
import Fade from 'react-reveal/Fade';

const DoctorDetails = () => {
  const { id } = useParams();
  const [doctors] = useDoctors();
  const selectedDoctor = doctors?.filter(
    (doctor) => doctor.id === parseInt(id)
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Fade left>
        <Container id="details" className="service-details pt-5 mb-5">
          <Row xs={1} lg={2} className="g-4">
            <Col className="col-md-12 col-lg-5">
              <div>
                <img
                  className=" doc-img"
                  src={selectedDoctor[0]?.image}
                  alt=""
                />
              </div>
            </Col>
            <Col className=" mb-md-12 col-lg-7">
              <h3 className="fw-bold">{selectedDoctor[0]?.name}</h3>
              <p className="fst-italic">{selectedDoctor[0]?.designation}</p>
              <p>{selectedDoctor[0]?.fullDescription}</p>
              <p className="fst-italic text-secondary">
                <FaRegEnvelope /> {selectedDoctor[0]?.email}
              </p>
              <p className="fst-italic text-secondary">
                <FaPhoneAlt /> {selectedDoctor[0]?.phone}
              </p>
              <div className="media-icons d-flex gap-4 mb-3">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
              <Button
                onClick={handleShow}
                className="btn btn-primary mt-3 px-3 small"
              >
                View {selectedDoctor[0]?.name} Schedules
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{selectedDoctor[0]?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> Saturday to Monday: 5pm-10pm</p>
                  <p> Tuesday to Wednesday: 9m-10pm</p>
                  <p> Thursday: All Day</p>
                  <p> Friday : Off Day</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Container className="mt-5">
        <h3 className="fw-bold text-center my-5">Other Doctors</h3>
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
          {doctors?.map((doctor) => (
            <Carousel.Item className="px-2">
              <Doctor key={doctor.id} doctor={doctor} />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* carousel end */}
      </Container>
    </>
  );
};

export default DoctorDetails;
