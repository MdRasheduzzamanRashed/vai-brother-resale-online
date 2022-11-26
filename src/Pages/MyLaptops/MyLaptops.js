import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";
import Loading from "./../SharedSections/Loading/Loading";

const MyLaptops = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/my-laptops?email=${user?.email}`;

  const { data: laptops = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Asking Price</th>
              <th>Processor</th>
              <th>Sell Status</th>
            </tr>
          </thead>
          <tbody>
            {laptops.map((laptop, i) => (
              <tr className="hover" key={laptop._id}>
                <th>{i + 1}</th>
                <td>{laptop.brand}</td>
                <td>{laptop.model}</td>
                <td>{laptop.askingPrice}</td>
                <td>{laptop.processor}</td>
                <td>
                  <Link>
                    <button className="btn btn-active btn-sm">Available</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLaptops;
