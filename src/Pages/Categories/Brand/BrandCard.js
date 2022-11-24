import React from "react";
import { Link } from "react-router-dom";

const BrandCard = ({ laptop }) => {
  const { brand, model, askingPrice, location, img1, img2, img3, img4, id } =
    laptop;
  const image1 = id + "a";
  const image2 = id + "b";
  const image3 = id + "c";
  const image4 = id + "d";
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
        <div className="flex justify-center pb-3 w-full gap-2">
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
        <div className="card-body">
          <h2 className="card-title">Model:{model}</h2>
          <p>Brand: {brand}</p>
          <p>Asking Price: {askingPrice}</p>
          <p>Buying Date:</p>
          <p>Location: {location}</p>
          <div className="card-actions justify-end">
            <Link to={`/brands/${brand}/${id}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
