import React from "react";
import "./BlogCart.css";

const BlogCart = (props) => {
  const { name, img, postBy, comments, date, like, details } = props.blog;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card h-100 border-0 shadow hoverShadow cart">
          <img src={img} className="card-img-top cartImg" alt="..." />
          <div className="card-body p-4 ">
            <p className=" text-Blue">
              <i className="far fa-calendar-alt me-1"></i>
              {date}
            </p>
            <h4 className="card-title cartTextHover">{name}</h4>
            <p className="card-text text-Gray line">{details}</p>
          </div>
          <div className="card-footer border-0 bg-body px-4 pb-3">
            <div className="d-flex d-flex justify-content-between">
              <p className="liked">
                <i className="far fa-user me-1 text-Blue"></i>
                {postBy}
              </p>
              <p className="liked">
                <i className="far fa-heart me-1 text-Blue"></i>
                {like}
              </p>
              <p className="liked">
                <i className="far fa-comment me-1 text-Blue"></i>
                {comments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCart;
