import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <>
      <div className="container-404">
        <h1 className="display-1 text-danger fw-bold">404</h1>
      </div>
      <div className="error-msg text-center">
        <h2 className="text-danger">Looks Like You're Lost</h2>
        <p>The page you are looking for not available</p>
        <Link className="btn btn btn-primary" to="/home">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
