import React from "react";

const BlogCard = ({ blog }) => {
  const { title, details, author, img, imgAuthor, date, email } = blog;
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
      <div className="hero-content flex-col">
        <img alt="" src={img} className="rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-4 text-justify">{details}</p>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl py-1">Author:</p>
              <div className="flex items-center">
                <img src={imgAuthor} className=" w-12 rounded-full" alt="" />
                <div className="ml-2">
                  <p>{author}</p>
                  <p>{email}</p>
                </div>
              </div>
            </div>
            <p>Publish Date: {date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
