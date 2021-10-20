import React from 'react';
import { useForm } from 'react-hook-form';
import { FaWpforms } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const Contact = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
          <button
            className="btn btn-primary text-uppercase container-fluid"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
