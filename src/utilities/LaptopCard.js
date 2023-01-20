import React from "react";
import { Link } from "react-router-dom";

const LaptopCard = ({ laptop }) => {
  const {
    brand,
    model,
    askingPrice,
    location,
    img1,
    img2,
    img3,
    img4,
    _id,
    dob,
    status,
  } = laptop;
  const image1 = _id + "a";
  const image2 = _id + "b";
  const image3 = _id + "c";
  const image4 = _id + "d";
  console.log(laptop);
  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          {status === "Sold" ? (
            <span className=" bg-red-600 text-white absolute top-1 right-1 badge">
              Sold
            </span>
          ) : (
            <span className=" bg-green-600 text-white absolute top-1 right-1 badge">
              Available
            </span>
          )}
          <div className="carousel w-96">
            <div id={image1} className="carousel-item w-96">
              <img alt="" src={img1} className="W-96" />
            </div>
            <div id={image2} className="carousel-item w-96">
              <img alt="" src={img2} className="W-96" />
            </div>
            <div id={image3} className="carousel-item w-96">
              <img alt="" src={img3} className="W-96" />
            </div>
            <div id={image4} className="carousel-item w-96">
              <img alt="" src={img4} className="W-96" />
            </div>
          </div>
        </figure>
        <div className="flex justify-center w-full gap-2 mt-3">
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
        <div className="card-body p-3">
          <h2 className="text-lg font-semibold">Model: {model}</h2>
          <p>Brand: {brand}</p>
          <p>Asking Price: {askingPrice} BDT</p>
          <p>Buying Date: {dob}</p>
          <p>Location: {location}</p>
          <div className="card-actions justify-end">
            <Link to={`/brands/${brand}/${_id}`}>
              <button className="btn btn-primary btn-sm">more details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopCard;
