import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "./../../SharedSections/Loading/Loading";
import AdvertisementCard from "./AdvertisementCard";

const Advertisement = () => {
  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/ads"
      );
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
      <h2 className="text-3xl bg-accent text-center font-medium py-2 mb-3">
        Advertisement
      </h2>
      <div>
        {onAirAds.map((ad) => (
          <AdvertisementCard key={ad._id} ad={ad}></AdvertisementCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
