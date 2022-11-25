import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const BrandsCard = ({ brandC, setBrandWise }) => {
  const { brand, img, details } = brandC;
  const { data } = useQuery({
    queryKey: [("brand", brand)],
    queryFn: () =>
      fetch(`http://localhost:5000/brand?brand=${brand}`).then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img className="w-full" src={img} alt="Brand" />
      </figure>
      <div className="card-body hover:bg-slate-900 hover:bg-opacity-60 rounded-xl">
        <h2 className="card-title uppercase">{brand}</h2>
        <p className=" text-justify">{details}</p>
        <div className="card-actions justify-center items-center">
          <p>Available Products: {data?.length}</p>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setBrandWise(data)}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandsCard;
