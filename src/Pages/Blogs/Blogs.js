import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import useTitle from "./../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");
  const blogs = useLoaderData();
  return (
    <div className="grid grid-cols-1 gap-5">
      <h2 className="text-4xl font-bold text-center bg-slate-500 py-3 text-white">
        Blogs
      </h2>
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default Blogs;
