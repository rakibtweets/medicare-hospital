import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Register = () => {
  const { handleRegistraion, error, signWithGoogle, signWithGitHub } =
    useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('~ data', data);
    const { email, password, name } = data;
    // const email = data.email;
    // const password = data.password;
    // const name = data.name;
    // setName(name);
    handleRegistraion(email, password, name);
  };
  return (
    <>
      <div className="login-form container mx-auto mt-2">
        <h2 className="fw-bold text-center py-2">
          <FaLock className="fs-1 mr-3" /> Register Account
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-75 mx-auto px-3 px-lg-5"
        >
          <input
            className="form-control p-3"
            type="text"
            placeholder="Your Name"
            defaultValue=""
            {...register('name', { required: true })}
          />
          <br />
          <input
            className="form-control p-3"
            type="email"
            placeholder="Your Email"
            defaultValue=""
            {...register('email', { required: true })}
          />
          <br />
          <input
            className="form-control p-3"
            type="password"
            placeholder="Your Password"
            {...register('password', { required: true })}
          />

          <div className=" d-flex flex-column justify-content-center align-items-center">
            {errors.password && (
              <span className=" text-danger mt-2">This field is required</span>
            )}
          </div>

          {error && <span className=" text-danger">{error}</span>}
          <br />
          <div className=" d-flex justify-content-center">
            <button
              className="btn btn-primary text-uppercase container-fluid"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="text-center text-secondary py-2">
            Or connect with social media
          </p>

          <div className="d-flex flex-column align-items-center gap-2 justify-content-lg-around">
            <button onClick={signWithGoogle} className="btn media-icon">
              <FcGoogle className="fs-3 me-2" /> Sign in with Google
            </button>
            <button
              onClick={signWithGitHub}
              className="btn text-white bg-dark github-icon"
            >
              <BsGithub className="fs-3 me-2" /> Sign in with Github
            </button>
            <p className="text-center">
              All ready have account ?{' '}
              <Link className=" text-decoration-none" to="/login">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
