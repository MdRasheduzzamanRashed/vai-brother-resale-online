import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div
      data-theme="luxury"
      className="hero h-96"
      style={{
        backgroundImage: `url("https://i.ibb.co/7rxyYCB/360-F-288803822-0-CJ8-L3gr6w6n-Gn-Ueje6p-Cll-CX7s986xz.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold uppercase">
            <Typewriter
              options={{
                strings: ["Be happy on your own limit"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-5 md:text-xl">
            One of the trusted online platform in the{" "}
            <span className="font-bold">Bangladesh</span> for buy and sell old
            laptops. we trust you and we hope you will trust also after take the
            service.
          </p>
          <h3 className="text-xl md:text-2xl mb-5 font-medium">
            Choose From Collection, Make A Schedule, Check And Buy Physically{" "}
          </h3>
          <Link to="/all-collections" className="btn btn-outline">
            Choose your desire one
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
