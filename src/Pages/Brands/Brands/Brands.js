import React, { useState } from "react";
import BrandsCard from "./BrandsCard";
import LaptopCard from "./../../../utilities/LaptopCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../SharedSections/Loading/Loading";
import useTitle from "./../../../hooks/useTitle";
import AllCollections from "../../AllCollections/AllCollections";

const Brands = () => {
  const [brandWise, setBrandWise] = useState([]);
  useTitle("Brands");
  const { data: brands = [], isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/brands"
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    <Loading></Loading>;
  }

  return (
    <div data-theme="luxury" className="p-5">
      <div>
        <h3 className="my-5 text-4xl font-bold text-center uppercase   py-2">
          Brands
        </h3>
      </div>
      <div className="flex flex-wrap gap-3 justify-evenly">
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
            <h3 className=" text-3xl text-center font-bold  py-2 my-3">
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
          <>
          <AllCollections></AllCollections>
          </>
      )}
    </div>
  );
};

export default Brands;
