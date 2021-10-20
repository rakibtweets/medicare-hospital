import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaWpforms } from 'react-icons/fa';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Contact = () => {
  const { user } = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.push('/home');
  };
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleShow();
  };

  return (
    <div className="login-form w-75 mx-auto mt-2">
      <h2 className="text-center py-2 fw-bold">
        <FaWpforms size="2em" className=" text-success fw-bold me-2" />
        Contact form
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-auto mx-auto px-3 px-lg-5"
      >
        <input
          type="text"
          className="form-control p-3"
          defaultValue={user?.displayName}
          placeholder="Name"
          {...register('name', { required: true, maxLength: 80 })}
        />
        <br />

        <input
          type="text"
          className="form-control p-3"
          defaultValue={user?.email}
          placeholder="Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <input
          type="text"
          className="form-control p-3"
          placeholder="Your Address"
          {...register('address', { required: true, maxLength: 80 })}
        />
        <br />
        <input
          type="tel"
          className="form-control p-3"
          placeholder="Mobile number"
          {...register('phone', {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <br />
        <div className=" d-flex flex-column justify-content-center align-items-center">
          {errors.phone && (
            <span className=" text-danger mt-2">
              Phone no cant't be less than 6 digit
            </span>
          )}
        </div>
        <br />
        <div className=" d-flex justify-content-center">
          <Button
            className="btn btn-primary text-uppercase container-fluid"
            type="submit"
          >
            Submit
          </Button>
          <Modal show={show} onHide={handleClose} bg="primary">
            <Modal.Header closeButton>
              <Modal.Title>Dear, {user.displayName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You have Submited Your Contact form, As we Care We will keep in
              touch with you
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default Contact;
