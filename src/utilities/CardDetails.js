import React from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const laptopDetails = useLoaderData();
  const {
    brand,
    model,
    cpu,
    dob,
    condition,
    email,
    generation,
    category,
    img1,
    img2,
    img3,
    img4,
    location,
    mobile,
    version,
    details,
    askingPrice,
    _id,
  } = laptopDetails;

  const image1 = _id + "x";
  const image2 = _id + "y";
  const image3 = _id + "z";
  const image4 = _id + "s";

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <div className="carousel w-full rounded-2xl">
            <div id={image1} className="carousel-item w-full">
              <img alt="" src={img1} className="w-full" />
            </div>
            <div id={image2} className="carousel-item w-full">
              <img alt="" src={img2} className="w-full" />
            </div>
            <div id={image3} className="carousel-item w-full">
              <img alt="" src={img3} className="w-full" />
            </div>
            <div id={image4} className="carousel-item w-full">
              <img alt="" src={img4} className="w-full" />
            </div>
          </div>

          <div className="flex justify-center py-3 w-full gap-2">
            <a href={`#${image1}`} className="btn btn-xs">
              1
            </a>
            <a href={`#${image2}`} className="btn btn-xs">
              2
            </a>
            <a href={`#${image3}`} className="btn btn-xs">
              3
            </a>
            <a href={`#${image4}`} className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl font-bold">Model: {model}</h3>
          <p className="my-1">
            <span className="font-bold">Brand:</span> {brand}
          </p>
          <p className="my-1">
            <span className="font-bold">Processor:</span>
            {cpu} {version} {generation}th gen
          </p>
          <p className="my-1">
            <span className="font-bold">Category: </span>
            {category}th gen
          </p>
          <p className="my-1">
            <span className="font-bold">Asking Price:</span> {askingPrice}
          </p>
          <p className="my-1">
            <span className="font-bold">Buying Date: </span>
            {dob}
          </p>
          <p className="my-1">
            <span className="font-bold">Location:</span> {location}
          </p>
          <p className="my-1">
            <span className="font-bold">Condition:</span> {condition}
          </p>
          <p className="my-1 text-justify">
            <span className="font-bold">Details:</span> {details}
          </p>
          <label htmlFor="my-modal" className="btn btn-primary">
            Contact Details
          </label>
        </div>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            If you want to buy this or you have any query Please contact below:
          </h3>
          <p className="pt-4">Email: {email}</p>
          <p className="pb-4">Mobile: {mobile}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-secondary">
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
