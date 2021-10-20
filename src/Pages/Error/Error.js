import React from "react";
import { Link } from "react-router-dom";
import error from "./../../Images/404.png";
import ErrorBanner from "./ErrorBanner/ErrorBanner";

const Error = () => {
  return (
    <div>
      <ErrorBanner></ErrorBanner>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={error} className="my-5 img-fluid" alt="" />
            <h1>OOPS! THAT PAGE CAN’T BE FOUND.</h1>
            <h3 className="text-Gray">
              The page you are looking is not available or has been removed. Try
              going to Home Page by using the button below.
            </h3>
            <Link to="/home">
              <button className="btn btns btn_Outline-Blue border_blue mb-5">
                <i className="fas fa-arrow-left"></i> Go To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
