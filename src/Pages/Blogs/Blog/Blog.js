import React, { useEffect, useState } from "react";
import BlogBanner from "../BlogBanner/BlogBanner";
import BlogCart from "../BlogCart/BlogCart";
// import BlogCart from "../BlogCart/BlogCart";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <BlogBanner></BlogBanner>
      <div className="container my-5">
        <div className="text-center">
          <h3 className="subTitle">Read Our Blogs</h3>
          <h1 className="title">Blogs & News</h1>
          <div className="d-flex justify-content-center">
            <hr className="hr" />
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => (
            <BlogCart blog={blog} key={blog.key}></BlogCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
