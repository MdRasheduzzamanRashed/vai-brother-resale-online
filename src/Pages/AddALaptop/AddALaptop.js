import React from "react";

const AddALaptop = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h3 className="text-3xl text-center uppercase">Add a Laptop</h3>
      <form>
        <label htmlFor="">Model</label>
        <input
          type="text"
          name=""
          placeholder="Enter your model"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">Brand</label>
        <input
          type="text"
          name=""
          placeholder="select your brand"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">Asking Price</label>
        <input
          type="text"
          name=""
          placeholder="Asking price"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">Date of Buy</label>
        <input
          type="text"
          name=""
          placeholder="Buying date"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">CPU</label>
        <select
          name=""
          id=""
          className="select select-bordered select-sm w-full my-1"
        >
          <option value="">Intel</option>
          <option value="">AMD</option>
        </select>
        Core/Series
        <input
          type="text"
          name=""
          placeholder="For intel enter core and for amd enter series"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">Condition</label>
        <select
          name=""
          id=""
          className="select select-bordered select-sm w-full my-1"
        >
          <option value="">Average</option>
          <option value="">Fresh</option>
          <option value="">Fresh Like New</option>
        </select>
        <label htmlFor="">Location</label>
        <input
          type="text"
          name=""
          placeholder="Location"
          className="input input-bordered input-sm w-full my-1"
        />
        <label htmlFor="">Mobile</label>
        <input
          type="text"
          name=""
          placeholder="Mobile"
          className="input input-bordered input-sm w-full my-1"
        />
        <input type="file" name="" id="" className="my-1" />
        <input type="file" name="" id="" className="my-1" />
        <input type="file" name="" id="" className="my-1" />
        <input type="file" name="" id="" className="my-1" />
        <br />
        <input type="checkbox" name="" id="" value="With box" />
        <label htmlFor="">Box available</label>
        <br />
        <input type="checkbox" name="" id="" placeholder="" />
        <label htmlFor="">Charger Available</label>
        <br />
        <input type="checkbox" name="" id="" placeholder="" />
        <label htmlFor="">Warranty Available</label>
        <br />
        <input type="checkbox" name="" id="" placeholder="" />
        <label htmlFor="">Invoice Available</label>
      </form>
    </div>
  );
};

export default AddALaptop;
