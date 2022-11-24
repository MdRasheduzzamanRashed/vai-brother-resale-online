import React from "react";
import { Link } from "react-router-dom";

const BrandCard = () => {
  const model = "pro";
  const name = "dell";
  return (
    <div>
      <div className="card shadow-xl">
        <figure>
          <div className="carousel w-full">
            <div id="Image1" className="carousel-item w-full">
              <img
                alt=""
                src="https://imaginecomputerbd.com/wp-content/uploads/ux434fac-500x500-1.jpg"
                className="w-full"
              />
            </div>
            <div id="Image2" className="carousel-item w-full">
              <img
                alt=""
                src="https://www.classyprice.com.bd/images/asus-zenbook-14-ux434fq-core-i7-laptop-1-1000x1000.jpg"
                className="w-full"
              />
            </div>
            <div id="Image3" className="carousel-item w-full">
              <img
                alt=""
                src="https://igadget.com.bd/wp-content/uploads/2020/09/ASUS-ZenBook-14-UX434FAC-core-i7-3.jpg"
                className="w-full"
              />
            </div>
            <div id="Image4" className="carousel-item w-full">
              <img
                alt=""
                src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/zenbook-14-ux435eal/zenbook-14-ux435eal-5-500x500.jpg"
                className="w-full"
              />
            </div>
          </div>
        </figure>
        <div className="flex justify-center pb-3 w-full gap-2">
          <a href="#Image1" className="btn btn-xs">
            1
          </a>
          <a href="#Image2" className="btn btn-xs">
            2
          </a>
          <a href="#Image3" className="btn btn-xs">
            3
          </a>
          <a href="#Image4" className="btn btn-xs">
            4
          </a>
        </div>
        <div className="card-body">
          <h2 className="card-title">Model:</h2>
          <p>Brand:</p>
          <p>Asking Price:</p>
          <p>Buying Date:</p>
          <p>Location:</p>
          <div className="card-actions justify-end">
            <Link to={`/brands/${name}/${model}`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
