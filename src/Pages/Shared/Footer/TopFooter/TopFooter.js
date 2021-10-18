import React from "react";
import { Link } from "react-router-dom";
import "./../Footer.css";

const TopFooter = () => {
  return (
    <div className="TopFooter p-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex align-items-center text-light">
            <h2 className="text-light">Follow Us</h2>
            <Link to="/">
              <i class="fab fa-facebook-f ms-3 me-3"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-instagram me-3"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-twitter me-3"></i>
            </Link>
            <Link to="/">
              <i class="fab fa-linkedin-in me-3"></i>
            </Link>
          </div>
          <div className="col-lg-4">
            <p className="text-Gray fw-bold fs-4">
              Sign in and don’t miss anything!
            </p>
          </div>
          <div className="col-lg-4">
            <div className=" text-center bg-Gray border_Radius">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control border-0 bg-Gray text-light ps-3"
                  placeholder="Email Address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span
                  class="input-group-text p-0 border-0 bg-none btn btns btn_Blue border_Radius"
                  id="basic-addon2"
                >
                  SUBSCRIBE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
<div>
  <i></i>
  <p></p>
</div>;
export default TopFooter;
