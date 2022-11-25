import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "./../../utilities/LaptopCard";

const AllCollections = () => {
  const laptops = useLoaderData();
  return (
    <div>
      <h3 className="mb-5 text-4xl font-bold text-center uppercase  bg-slate-500 text-white py-2">
        Choose your desire laptop
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {laptops.map((laptop) => (
          <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
        ))}
      </div>
    </div>
  );
};

export default AllCollections;
