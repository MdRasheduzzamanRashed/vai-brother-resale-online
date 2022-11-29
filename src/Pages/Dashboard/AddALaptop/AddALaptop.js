import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddALaptop = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [images, setImages] = useState([]);
  const imagesU = [];
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  const handleAddLaptop = (data) => {
    const image1 = data.image1[0];
    const image2 = data.image2[0];
    const image3 = data.image3[0];
    const image4 = data.image4[0];
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    const formData4 = new FormData();
    formData1.append("image", image1);
    formData2.append("image", image2);
    formData3.append("image", image3);
    formData4.append("image", image4);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData1,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image1 = { image: imgData.data.url };
          imagesU.push(image1);
        }
      });
    fetch(url, {
      method: "POST",
      body: formData2,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image2 = { image: imgData.data.url };
          imagesU.push(image2);
        }
      });
    fetch(url, {
      method: "POST",
      body: formData3,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image3 = { image: imgData.data.url };
          imagesU.push(image3);
        }
      });
    fetch(url, {
      method: "POST",
      body: formData4,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const image4 = { image: imgData.data.url };
          imagesU.push(image4);
        }
        setImages(imagesU);
      });
    const laptop = {
      email: user.email,
      name: user.displayName,
      brand: data.brand,
      model: data.model,
      gpu: data.gpu,
      processor: data.processor,
      version: data.version,
      generation: data.generation,
      category: data.category,
      details: data.details,
      status: "Available",
      ads: false,
      dob: data.dob,
      location: data.location,
      condition: data.condition,
      askingPrice: data.askingPrice,
      newPrice: data.newPrice,
      mobile: data.mobile,
      img1: images[0].image,
      img2: images[1].image,
      img3: images[2].image,
      img4: images[3].image,
      date: new Date(),
    };
    fetch(
      "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/laptops",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(laptop),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        toast.success("One Laptop added successfully.");
        navigate("/dashboard/my-laptops");
      });
  };

  return (
    <div className="mx-2 md:w-1/2 md:mx-auto">
      <h3 className="text-3xl text-center uppercase">Add a Laptop</h3>
      <form onSubmit={handleSubmit(handleAddLaptop)}>
        <label className="label">
          <span className="label-text">Mobile</span>
        </label>
        <input
          {...register("mobile", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="label">
              <span className="label-text">Brand</span>
            </label>
            <select
              {...register("brand")}
              className=" select-bordered select select-sm w-full mb-2"
            >
              {brands.map((brand) => (
                <option key={brand._id}>{brand.brand}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Model</span>
            </label>
            <input
              {...register("model", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className=" select-bordered select select-sm w-full mb-2"
            >
              <option>Gaming</option>
              <option>Laptop</option>
              <option>Desktop</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">Processor </span>
            </label>
            <select
              {...register("processor")}
              className=" select-bordered select select-sm w-full mb-2"
            >
              <option>Intel</option>
              <option>AMD</option>
              <option>MAC</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">GPU</span>
            </label>
            <select
              {...register("gpu")}
              className=" select-bordered select select-sm w-full mb-2"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Generation/Series</span>
            </label>
            <input
              {...register("generation", {
                required: "Generation is required",
              })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Version/Core</span>
            </label>
            <input
              {...register("version", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Asking Price</span>
            </label>
            <input
              {...register("askingPrice", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">New Price</span>
            </label>
            <input
              {...register("newPrice", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              {...register("location", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Date of Buy</span>
            </label>
            <input
              {...register("dob", { required: "Name is required" })}
              type="text"
              className="input input-bordered input-sm w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <select
              {...register("condition")}
              className=" select-bordered select select-sm w-full mb-2"
            >
              <option>Rarely used</option>
              <option>Used</option>
              <option>Fresh like new</option>
              <option>Fresh</option>
            </select>
          </div>
        </div>

        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <textarea
          {...register("details", { required: "Name is required" })}
          type="text"
          className=" textarea textarea-bordered w-full"
        />
        <label className="label">
          <span className="label-text">Photos</span>
        </label>
        <input
          {...register("image1", { required: "Photo is required" })}
          type="file"
          className="mb-2 w-1/2"
        />
        <input
          {...register("image2", { required: "Photo is required" })}
          type="file"
          className="mb-2 w-1/2"
        />
        <input
          {...register("image3", { required: "Photo is required" })}
          type="file"
          className="mb-2 w-1/2"
        />
        <input
          {...register("image4", { required: "Photo is required" })}
          type="file"
          className="mb-2 w-1/2"
        />
        {errors.image && <p className=" text-error">{errors.image?.message}</p>}
        <input type="submit" className="w-full btn" value="Add Laptop" />
      </form>
    </div>
  );
};

export default AddALaptop;
