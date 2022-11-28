import React, { useState } from "react";
import BrandsCard from "./BrandsCard";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "./../../../utilities/LaptopCard";

const Brands = () => {
  const brands = useLoaderData();
  const [brandWise, setBrandWise] = useState([]);
  console.log();
  return (
    <div>
      <div>
        <h3 className="my-10 text-4xl font-bold text-center uppercase  bg-slate-500 text-white py-2">
          Brands
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {brands.map((brandC) => (
          <BrandsCard
            key={brandC._id}
            brandC={brandC}
            setBrandWise={setBrandWise}
          ></BrandsCard>
        ))}
      </div>
      {brandWise.length > 0 ? (
        <>
          <div className="mt-5">
            <h3 className=" text-3xl text-center font-bold bg-slate-500 text-white py-2 my-3">
              {brandWise[0]?.brand}
            </h3>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {brandWise.map((laptop) => (
                <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
              ))}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Brands;
