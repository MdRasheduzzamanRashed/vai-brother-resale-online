import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";
import ConfirmationModal from "../../SharedSections/ConfirmationModal/ConfirmationModal";
import Loading from "../../SharedSections/Loading/Loading";
import useTitle from "./../../../hooks/useTitle";

const MyLaptops = () => {
  const { user } = useContext(AuthContext);
  const [deletingLaptop, setDeletingLaptop] = useState(null);
  const closeModal = () => {
    setDeletingLaptop(null);
  };
  useTitle("My Laptops");
  const url = `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/my-laptops?email=${user?.email}`;

  const {
    data: laptops = [],
    isLoading,
    refetch,
  } = useQuery({
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
  const handleSold = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/laptops/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully sold");
          refetch();
        }
      });

    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/adsItemSold/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Ads off!");
          refetch();
        }
      });
  };
  const handleAds = (laptop) => {
    fetch(
      "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/ads",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(laptop),
      }
    )
      .then((res) => res.json())
      .then((result) => {});
    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/laptopsAds/${laptop._id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Successfully sold");
          refetch();
        }
      });
  };

  const handleDeleteLaptop = (laptop) => {
    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/laptops/${laptop._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${laptop.model} deleted successfully.`);
        }
      });
  };

  return (
    <div>
      <h3 className="text-center text-4xl font-bold mb-12">My Laptops</h3>
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Asking Price</th>
              <th>Processor</th>
              <th>Sell Status</th>
              <th>Action</th>
              <th>Advertisement</th>
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
                <td>{laptop?.status}</td>
                <td>
                  <label
                    onClick={() => setDeletingLaptop(laptop)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>
                  {laptop?.status !== "Sold" && (
                    <button
                      onClick={() => handleSold(laptop._id)}
                      className="btn btn-active ml-2 btn-sm"
                    >
                      mark as sold
                    </button>
                  )}
                </td>
                <td>
                  {laptop?.ads === false && laptop?.status !== "Sold" ? (
                    <button
                      onClick={() => handleAds(laptop)}
                      className="btn btn-active btn-sm"
                    >
                      Advertisement
                    </button>
                  ) : (
                    "OFF"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingLaptop && (
        <ConfirmationModal
          title={"Are you sure you want to delete?"}
          message={`If you delete ${deletingLaptop.name}. It can't undone anymore.`}
          successAction={handleDeleteLaptop}
          successButtonName="Delete"
          modalData={deletingLaptop}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyLaptops;
