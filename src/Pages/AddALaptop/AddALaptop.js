import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./../../context/AuthProvider";

const AddALaptop = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user);
  const [images, setImages] = useState([]);
  const imagesU = [];
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddLaptop = (data) => {
    console.log(data);
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
        // console.log(imgData);
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
        // console.log(imgData);
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
        // console.log(imgData);
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
        // console.log(imgData);
        if (imgData.success) {
          const image4 = { image: imgData.data.url };
          imagesU.push(image4);
          // console.log(imagesU);
        }
        setImages(imagesU);
      });
    // console.log(images);
    const laptop = {
      brand: data.brand,
      details: data.details,
      dob: data.dob,
      email: data.email,
      generation: data.generation,
      gpu: data.gpu,
      model: data.model,
      name: data.name,
      version: data.version,
      location: data.location,
      condition: data.condition,
      askingPrice: data.askingPrice,
      processor: data.processor,
      mobile: data.mobile,
      img1: images[0].image,
      img2: images[1].image,
      img3: images[2].image,
      img4: images[3].image,
    };
    console.log(laptop);
    fetch("http://localhost:5000/laptops", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(laptop),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-3xl text-center uppercase">Add a Laptop</h3>
      <form onSubmit={handleSubmit(handleAddLaptop)}>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          {...register("name")}
          type="text"
          value={user.displayName}
          disabled
          placeholder="Your name"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          
          type="email"
          value={user.email}
          disabled
          className="input input-bordered input-sm w-full"
        />
        
        <label className="label">
          <span className="label-text">Brand</span>
        </label>
        <select
          {...register("brand")}
          className=" select-bordered select select-sm w-full mb-2"
        >
          <option>Apple</option>
          <option>Asus</option>
          <option>Dell</option>
          <option>Lenovo</option>
          <option>Acer</option>
          <option>Hp</option>
          <option>Samsung</option>
          <option>Sony</option>
          <option>DCL</option>
          <option>Others</option>
        </select>
        <label className="label">
          <span className="label-text">Model</span>
        </label>
        <input
          {...register("model", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">
          <span className="label-text">Mobile</span>
        </label>
        <input
          {...register("mobile", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
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
        <label className="label">
          <span className="label-text">Generation</span>
        </label>
        <select
          {...register("generation")}
          className=" select-bordered select select-sm w-full mb-2"
        >
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>5000</option>
          <option>7000</option>
        </select>
        <label className="label">
          <span className="label-text">Version/Core</span>
        </label>
        <input
          {...register("version", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">
          <span className="label-text">Asking Price</span>
        </label>
        <input
          {...register("askingPrice", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <input
          {...register("location", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
        <label className="label">
          <span className="label-text">Date of Buy</span>
        </label>
        <input
          {...register("dob", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
        />
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
        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <input
          {...register("details", { required: "Name is required" })}
          type="text"
          className="input input-bordered input-sm w-full"
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
