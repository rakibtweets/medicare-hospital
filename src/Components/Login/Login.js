import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useHistory } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

const Login = () => {
  const { userEmailPasswordLogin, signWithGoogle, signWithGitHub, error } =
    useAuth();
  //redirectiong from log page
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || '/home';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    userEmailPasswordLogin(email, password)
  };

  //re-direct url
  const handleSignWitGoogle = () => {
    signWithGoogle()
      .then((result) => {
        // console.log(result.user);
        history.push(redirectUrl);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
      });
  };
  return (
    <>
      <div className="login-form w-50 mx-auto mt-2">
        <h2 className="fw-bold text-center py-2">
          <FaLock className="fs-1 mr-3" /> Account Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className=" w-75 mx-auto">
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
            <Link className="nav-link">Forgot Password ?</Link>
          </div>

          {error && <span className=" text-danger">{error}</span>}
          <br />
          <div className=" d-flex justify-content-center">
            <button
              className="btn btn-primary text-uppercase container-fluid"
              type="submit"
            >
              Login
            </button>
          </div>
          <p className="text-center text-secondary py-3">
            Or connect with social media
          </p>

          <div className="d-flex flex-column align-items-center gap-3 justify-content-lg-around">
            <button onClick={handleSignWitGoogle} className="btn media-icon">
              <FcGoogle className="fs-3 me-2" /> Sign in with Google
            </button>
            <button
              onClick={signWithGitHub}
              className="btn text-white bg-dark github-icon"
            >
              <BsGithub className="fs-3 me-2" /> Sign in with Github
            </button>
            <p className="text-center">
              Don't have account ?{' '}
              <Link className=" text-decoration-none" to="/register">
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
