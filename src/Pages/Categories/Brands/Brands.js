import React from "react";
import BrandsCard from "./BrandsCard";
import { useLoaderData } from "react-router-dom";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div>
      <div>
        <h3 className="my-8 text-4xl text-center uppercase">Brands</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {brands.map((brand) => (
          <BrandsCard keys={brand.id} brand={brand}></BrandsCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
