import { useQuery } from "@tanstack/react-query";
import React from "react";

const BrandsCard = ({ brandC, setBrandWise }) => {
  const { brand, img, details } = brandC;

  const { data } = useQuery({
    queryKey: [("brand", brand)],
    queryFn: () =>
      fetch(
        `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/brand?brand=${brand}`
      ).then((res) => res.json()),
  });

  return (
    <div data-theme="luxury" className="card w-96 shadow-xl image-full">
      <figure>
        <img className="w-full" src={img} alt="Brand" />
      </figure>
      <div className="card-body rounded-xl">
        <h2 className="card-title uppercase">{brand}</h2>
        <p>{details}</p>
        <div className="card-actions justify-center items-center">
          <p>
            Available Products:
            <span className="font-bold"> {data?.length}</span>
          </p>
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
