import React from "react";
import "./BlogCart.css";

const BlogCart = (props) => {
  const { name, img, postBy, comments, date, like } = props.blog;
  return (
    <>
      <div className="col-lg-4 col-md-6 col-12">
        <div class="card h-100 border-0 shadow cart">
          <img src={img} class="card-img-top cartImg" alt="..." />
          <div class="card-body p-4 ">
            <p className=" text-Blue">
              <i class="far fa-calendar-alt me-1"></i>
              {date}
            </p>
            <h4 class="card-title cartTextHover">{name}</h4>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer border-0 bg-body px-4 pb-3">
            <div className="d-flex d-flex justify-content-between">
              <p className="liked">
                <i class="far fa-user me-1 text-Blue"></i>
                {postBy}
              </p>
              <p className="liked">
                <i class="far fa-heart me-1 text-Blue"></i>
                {like}
              </p>
              <p className="liked">
                <i class="far fa-comment me-1 text-Blue"></i>
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
