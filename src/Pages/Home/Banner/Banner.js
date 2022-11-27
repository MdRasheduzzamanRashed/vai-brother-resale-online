import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://helios-i.mashable.com/imagery/articles/05MWwHhUKuh33Ic3lHIKDMl/hero-image.fill.size_1248x702.v1623385155.png")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold uppercase">
            Be happy on your own limit
          </h1>
          <p className="mb-5 md:text-xl">
            One of the trusted online platform in the{" "}
            <span className="font-bold">Bangladesh</span> for buy and sell old
            laptops. we trust you and we hope you will trust also after take the
            service.
          </p>
          <h3 className=" text-xl md:text-3xl mb-5 font-medium">Choose From Collection, Make A Schedule, Check And Buy Physically </h3>
          <Link to="/all-collections" className="btn btn-primary">
            Choose your desire one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
