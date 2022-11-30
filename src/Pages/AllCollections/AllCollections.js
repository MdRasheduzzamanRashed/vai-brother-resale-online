import React, { useEffect, useState } from "react";
import LaptopCard from "./../../utilities/LaptopCard";
import useTitle from "./../../hooks/useTitle";

const AllCollections = () => {
  const [laptops, setLaptops] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  useTitle("All Collections");
  
  useEffect(() => {
    const url = `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/laptopsPage?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setLaptops(data.laptops);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  return (
    <div>
      <h3 className="my-5 text-xl md:text-3xl lg:text-4xl font-bold text-center uppercase  bg-slate-500 text-white py-2">
        Choose your desire laptop
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {laptops.map((laptop) => (
          <LaptopCard key={laptop._id} laptop={laptop}></LaptopCard>
        ))}
      </div>
      <div className="btn-group mt-5 gap-2">
        {[...Array(pages).keys()].map((number) => (
          <button
            className={page === number ? "btn btn-active btn-primary" : "btn"}
            key={number}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}
        <select
          className=" select select-bordered rounded"
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default AllCollections;
