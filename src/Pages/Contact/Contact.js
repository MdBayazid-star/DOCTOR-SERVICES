import React from "react";
import { Link } from "react-router-dom";
import ContactBanner from "./ContactBanner/ContactBanner";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <ContactBanner></ContactBanner>
      <div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6 my-auto">
              <div className="d-flex">
                <span className="icons">
                  <i className="fas fa-phone-alt p-3"></i>
                </span>
                <div>
                  <h5>Call Me</h5>
                  <p>999-777-666</p>
                </div>
              </div>
              <div className="d-flex">
                <span className="icons">
                  <i className="far fa-envelope p-3"></i>
                </span>
                <div>
                  <h5>Email</h5>
                  <p>freelencebayazid@email.com</p>
                </div>
              </div>
              <div className="d-flex">
                <span className="icons">
                  <i className="fas fa-map-marker-alt p-3"></i>
                </span>
                <div>
                  <h5>Location</h5>
                  <p>Bangladesh,Asia,Earth</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-5">
              <div className="contactInfo mb-4">
                <div className="input-group mb-3 row">
                  <div className="form-floating  col-lg-6 mb-3">
                    <textarea
                      className="form-control bg-lg"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      {" "}
                      &nbsp; &nbsp; Name
                    </label>
                  </div>
                  <div className="form-floating col-lg-6">
                    <textarea
                      className="form-control bg-lg"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                    ></textarea>
                    <label htmlFor="floatingTextarea2">
                      {" "}
                      &nbsp; &nbsp; Email
                    </label>
                  </div>
                </div>
              </div>
              <div className="contactInfo me-4  w-fluid">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-lg w-100"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Subjects</label>
                </div>
              </div>
              <div className="my-4">
                <div className="form-floating">
                  <textarea
                    className="form-control bg-lg c-hight"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>
              </div>
              <Link to="/">
                <button className="btn btns btn_Outline-Blue border_blue">
                  <i className="far fa-paper-plane"></i> Send Massage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
