import React from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCard from "./../../utilities/LaptopCard";
import useTitle from "./../../hooks/useTitle";

const Category = () => {
  const laptops = useLoaderData();
  useTitle("Category");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-36">
      {laptops.length > 0 ? (
        laptops.map((laptop) => (
          <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
        ))
      ) : (
        <p>Sorry, No laptop found in this category.</p>
      )}
    </div>
  );
};

export default Category;
