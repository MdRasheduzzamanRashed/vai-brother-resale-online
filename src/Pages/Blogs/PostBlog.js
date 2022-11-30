import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";
import useTitle from "./../../hooks/useTitle";

const PostBlog = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  useTitle("Post Blog");
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddBrand = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const blog = {
            title: data.title,
            details: data.details,
            img: imgData.data.url,
            author: user.displayName,
            email: user.email,
            imgAuthor: user.photoURL,
            date: new Date(),
          };
          fetch(
            "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/blogs",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(blog),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              toast.success("Blog posted successfully.");
              navigate("/blogs");
            });
        }
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-3xl text-center uppercase">Post a Blog</h3>
      <form onSubmit={handleSubmit(handleAddBrand)}>
        <label className="label">
          <span className="label-text">Blog Title</span>
        </label>
        <input
          {...register("title", { required: "Blog title is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />

        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <textarea
          {...register("details", { required: "Details is required" })}
          type="text"
          className=" textarea textarea-bordered w-full"
        />
        <label className="label">
          <span className="label-text">Photos</span>
        </label>
        <input
          {...register("image", { required: "Photo is required" })}
          type="file"
          className="mb-2 w-1/2"
        />
        {errors.image && <p className=" text-error">{errors.image?.message}</p>}
        <input type="submit" className="w-full btn" value="Post Blog" />
      </form>
    </div>
  );
};

export default PostBlog;
