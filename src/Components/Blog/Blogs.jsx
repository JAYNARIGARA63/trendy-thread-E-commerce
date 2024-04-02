import React from "react";
// import "./BlogSection.css";

const Blogs = ({ blog }) => {
  return (
    <div className="bg-[#fff] h-full w-96 border-none cursor-pointer">
      <img
        className="w-full h-3/5 object-cover"
        src={`/assets/Image/${blog?.imageUrl}`}
        alt={blog?.title}
      />
      <h3 className="mt-5 ml-5">{blog?.title}</h3>
      <p className="ml-5 text-gray-600 text-base">{blog?.purpose}</p>
      <br />
      <span className="ml-5 text-xs">{blog?.author}</span>
    </div>
  );
};

export default Blogs;
