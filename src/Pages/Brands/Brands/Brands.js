import React, { useState } from "react";
import BrandsCard from "./BrandsCard";
import LaptopCard from "./../../../utilities/LaptopCard";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../SharedSections/Loading/Loading";

const Brands = () => {
  const [brandWise, setBrandWise] = useState([]);

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
    <div>
      <div>
        <h3 className="my-5 text-4xl font-bold text-center uppercase  bg-slate-500 text-white py-2">
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
