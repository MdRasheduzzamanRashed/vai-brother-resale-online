import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "../../../../utilities/LaptopCard";

const Brand = () => {
  const laptops = useLoaderData();
  console.log(laptops);
  return (
    <div className=" grid grid-cols-3 gap-3">
      {laptops.map((laptop) => (
        <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
      ))}
    </div>
  );
};

export default Brand;
