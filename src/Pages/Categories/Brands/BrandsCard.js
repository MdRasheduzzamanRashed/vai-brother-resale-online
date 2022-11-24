import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  const { name, img, details, id } = brand;
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img className="w-full" src={img} alt="Brand" />
      </figure>
      <div className="card-body hover:bg-slate-900 hover:bg-opacity-60 rounded-xl">
        <h2 className="card-title uppercase">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end items-center">
          <p>Available Products:{}</p>
          <Link to={`/brands/${name}`}>
            <button className="btn btn-primary">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
