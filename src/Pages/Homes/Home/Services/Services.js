import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
// import Cart from "../Cart/Cart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./fakeDb.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="subTitle">Get Our Services</h3>
        <h1 className="title">Our Servicer</h1>
        <div className="d-flex justify-content-center">
          <hr className="hr" />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
        {services.map((service) => (
          <Cart service={service} key={service.key}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Services;
