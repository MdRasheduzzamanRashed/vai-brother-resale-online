import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "./../../../hooks/useTitle";

const AddABrand = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  useTitle("Add A Brand");
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
          const brand = {
            brand: data.brand,
            details: data.details,
            img: imgData.data.url,
          };
          fetch(
            "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/brands",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(brand),
            }
          )
            .then((res) => res.json())
            .then((result) => {
              toast.success("Brand added successfully.");
              navigate("/brands");
            });
        }
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-3xl text-center uppercase">Add a Laptop</h3>
      <form onSubmit={handleSubmit(handleAddBrand)}>
        <label className="label">
          <span className="label-text">Brand</span>
        </label>
        <input
          {...register("brand", { required: "Brand name is required" })}
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
        <input type="submit" className="w-full btn" value="Add Brand" />
      </form>
    </div>
  );
};

export default AddABrand;
