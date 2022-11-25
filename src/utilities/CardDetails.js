import React from "react";

const CardDetails = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <div className="carousel w-full">
            <div id="Image1" className="carousel-item w-full">
              <img
                alt=""
                src="https://imaginecomputerbd.com/wp-content/uploads/ux434fac-500x500-1.jpg"
                className="w-full"
              />
            </div>
            <div id="Image2" className="carousel-item w-full">
              <img
                alt=""
                src="https://www.classyprice.com.bd/images/asus-zenbook-14-ux434fq-core-i7-laptop-1-1000x1000.jpg"
                className="w-full"
              />
            </div>
            <div id="Image3" className="carousel-item w-full">
              <img
                alt=""
                src="https://igadget.com.bd/wp-content/uploads/2020/09/ASUS-ZenBook-14-UX434FAC-core-i7-3.jpg"
                className="w-full"
              />
            </div>
            <div id="Image4" className="carousel-item w-full">
              <img
                alt=""
                src="https://www.startech.com.bd/image/cache/catalog/laptop/asus/zenbook-14-ux435eal/zenbook-14-ux435eal-5-500x500.jpg"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-center py-3 w-full gap-2">
            <a href="#Image1" className="btn btn-xs">
              1
            </a>
            <a href="#Image2" className="btn btn-xs">
              2
            </a>
            <a href="#Image3" className="btn btn-xs">
              3
            </a>
            <a href="#Image4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-3xl font-bold">Model:</h3>
          <p>Brand:</p>
          <p>Asking Price:</p>
          <p>Buying Date:</p>
          <p>Location:</p>
          <p>Mobile:</p>
          <p>Condition:</p>
          <p>Details:</p>
          <button className="btn btn-primary btn-sm">Make a schedule to meet</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
