import React from "react";
import Brands from "../Brands/Brands/Brands";
import Banner from "./Banner/Banner";
import Advertisement from "./Advertisement/Advertisement";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../SharedSections/Loading/Loading";

const Home = () => {
  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/ads");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    <Loading></Loading>;
  }
  const onAirAds = ads.filter((ad) => ad.status !== "Sold");
  return (
    <div>
      <div className=" grid grid-cols-4 gap-2">
        {onAirAds.length > 0 ? (
          <div className="col-span-3">
            <Banner></Banner>
            <Brands></Brands>
          </div>
        ) : (
          <div className="col-span-4">
            <Banner></Banner>
            <Brands></Brands>
          </div>
        )}
        {onAirAds.length > 0 ? (
          <div>
            <Advertisement></Advertisement>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
