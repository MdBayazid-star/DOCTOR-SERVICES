import React from "react";
import { Link } from "react-router-dom";
import "./../Home.css";

const Banner = () => {
  return (
    <div>
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 my-5 py-5">
              <div className="box">
                <div className="box2"></div>
                <div className="">
                  <h1 className="text-light">
                    We Take Care Of Your Healthy Health
                  </h1>
                  <p className="text-light">
                    Mimply dummy text of the printing type setting area lead
                    spsum dolor onsecte dipiscing. Mimply dummy text printing
                    apsum dolor onsecte dipiscing.
                  </p>
                  <Link to="">
                    <button className="btn btns btn_Outline-Blue">
                      See All Services{" "}
                      <i className="fas fa-chevron-right smallest_Fonts"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
