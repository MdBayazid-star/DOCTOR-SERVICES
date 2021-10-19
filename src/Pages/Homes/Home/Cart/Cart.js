import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ service }) => {
  const { name, img, description, key } = service;
  const details = description.slice(0, 200);
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 border-0 shadow">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-uppercase">{name}</h5>
          <p className="card-text text-capitalize">{details}</p>
        </div>
        <div className="card-footer bg-none border-0">
          <small className="text-muted">
            <div className="d-flex justify-content-evenly">
              <Link to={`/service/${key}`}>
                <button className="btn btns btn_Blue">Perches</button>
              </Link>
              <button className="btn btns btn_Outline-Blue border_blue ">
                Add Cart
              </button>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Cart;
