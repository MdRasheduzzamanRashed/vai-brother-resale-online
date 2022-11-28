import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "./../../utilities/LaptopCard";

const Category = () => {
  const laptops = useLoaderData();
  return (
    <div>
      <h2>{laptops.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {laptops.length > 0 ? (
          laptops.map((laptop) => (
            <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
          ))
        ) : (
          <p>Sorry, No laptop found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
