import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";
import ServicesBanner from "./ServicesBanner.js/ServicesBanner";
const ServicesDetails = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakeDb.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td.key === key);

  return (
    <div>
      <ServicesBanner></ServicesBanner>
      <div className="servicesDetails">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 my-5">
              <div className="serDeImg">
                <img
                  className="img-fluid p-3"
                  src={ExactIteam[0]?.img}
                  alt=""
                />
              </div>
              <div className="p-4 bgWhite mt-5">
                <h3 className="fw-bold">Contact Us</h3>
                <hr className="hr" />
                <h5 className="my-4">
                  Phone: <span>+ (123) 1800-567</span>
                </h5>
                <h5 className="my-4">
                  Office: <span>+ (123) 1800-567</span>
                </h5>
                <h5 className="my-4">
                  E-mail: <span>Example@tlprt.com</span>
                </h5>
                <h5 className="my-4">
                  Social:{" "}
                  <span>
                    <i className="fab fa-facebook-f text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-instagram text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-twitter text-Blue mx-3 smallFont"></i>
                    <i className="fab fa-linkedin-in text-Blue mx-3 smallFont"></i>
                  </span>
                </h5>
              </div>
              <div className="p-4 bgBlue mt-5 d-flex">
                <div className="imgIcon me-4">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="text-light">
                  <h3>Emergency Cases</h3>
                  <p>+001236540256</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 my-5">
              <div className="px-5 bgWhite">
                <div>
                  <h4 className="fw-bold pt-3">About</h4>
                  <hr className="hr" />
                  <div className="">
                    <h3 className="text-Blue text-capitalize">
                      Name : {ExactIteam[0]?.name}
                    </h3>
                    <p>
                      <span className="fw-bold text-Blue text-capitalize fs-5">
                        Description :
                      </span>{" "}
                      <span className="text-Gray fs-5">
                        {ExactIteam[0]?.description}
                      </span>
                    </p>
                    <p>
                      <span className="fw-bold text-Blue fs-5">Price :</span>{" "}
                      <span className="fs-5">{ExactIteam[0]?.price}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-Blue fs-5">Workers :</span>{" "}
                      <span className="fs-5">{ExactIteam[0]?.worker}</span>
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="fw-bold">Appointmnet Schedules:</h4>
                  <hr className="hr mb-5" />
                  <div className=" py-3 px-5 my-3 bg-LightBlue">
                    <span className="me-5 fs-5 fw-bold">Day</span>
                    <span className="ms-5 fs-5 fw-bold">Time</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mx-5 my-3">
                    <div>
                      <span className="me-5 fs-5 fw-bold">SUN</span>
                      <span className="ms-5 fs-5 fw-bold">
                        11:30AM - 12:30PM
                      </span>
                    </div>
                    <div>
                      <button className="btn btns btn_Outline-Blue border_blue">
                        Appointmnet
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center py-2 px-5 my-3 bg-LightBlue">
                    <div>
                      <span className="me-5 fs-5 fw-bold">THU</span>
                      <span className="ms-5 fs-5 fw-bold">
                        12:00PM - 5:00PM
                      </span>
                    </div>
                    <div>
                      <button className="btn btns btn_Outline-Blue border_blue">
                        Appointmnet
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mx-5 my-3 pb-5">
                    <div>
                      <span className="me-5 fs-5 fw-bold">SUN</span>
                      <span className="ms-5 fs-5 fw-bold">2:00PM - 7:30PM</span>
                    </div>
                    <div>
                      <button className="btn btns btn_Outline-Blue border_blue">
                        Appointmnet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-5 bgWhite shadow">
              <div className="p-5">
                <p className="fs-5 text-Gray">{ExactIteam[0]?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
