import React from "react";
import { Link } from "react-router-dom";

const AdvertisementCard = ({ad}) => {
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
  } = ad;
  const image1 = _id + "a";
  const image2 = _id + "b";
  const image3 = _id + "c";
  const image4 = _id + "d";

  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <div className="carousel w-full">
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
        </figure>
        <div className="flex justify-center pb-3 w-full md:gap-2 mt-3">
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
        <div className="card-body p-2">
          <h2 className="card-title">Model: {model}</h2>
          <p>Brand: {brand}</p>
          <p>Asking Price: {askingPrice}</p>
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

export default AdvertisementCard;
