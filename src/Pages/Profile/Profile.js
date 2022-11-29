import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../context/AuthProvider";
import Loading from "./../SharedSections/Loading/Loading";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const url = `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/my-laptops?email=${user?.email}`;

  const { data: laptops = [], isLoading } = useQuery({
    queryKey: ["laptops", user?.email],
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={user.photoURL}
          className=" w-1/4 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{user.displayName}</h1>
          <p className="pt-6">Email: {user.email}</p>
          <p>Uploaded Laptops: {laptops.length > 0 ? laptops.length : 0}</p>
          <Link to="/dashboard/my-laptops" className="btn btn-sm mt-3">
            See Uploaded Laptops
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
