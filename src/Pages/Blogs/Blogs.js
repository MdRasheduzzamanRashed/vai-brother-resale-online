import React from "react";
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';

const Blogs = () => {
  const blogs = useLoaderData()
  return (
    <div className="grid grid-cols-1 gap-5">
      {
        blogs.map(blog=><BlogCard key={blog._id} blog={blog}></BlogCard>)
}
    </div>
  );
};

export default Blogs;
