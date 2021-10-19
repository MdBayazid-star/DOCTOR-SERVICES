import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ service }) => {
  const { name, img, description, key } = service;
  const details = description.slice(0, 200);
  return (
    <div className="col-lg-4 col-md-6">
      <div class="card h-100 border-0 shadow">
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-uppercase">{name}</h5>
          <p class="card-text text-capitalize">{details}</p>
        </div>
        <div class="card-footer bg-none border-0">
          <small class="text-muted">
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
