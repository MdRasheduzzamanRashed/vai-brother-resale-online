import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";

const Brand = () => {
  const laptops = useLoaderData();
  console.log(laptops);
  return (
    <div className=" grid grid-cols-3 gap-3">
      {laptops.map((laptop) => (
        <BrandCard key={laptop.id} laptop={laptop}></BrandCard>
      ))}
    </div>
  );
};

export default Brand;
