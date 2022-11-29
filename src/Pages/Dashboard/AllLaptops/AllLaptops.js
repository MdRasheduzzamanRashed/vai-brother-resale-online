import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "./../../SharedSections/ConfirmationModal/ConfirmationModal";

const AllLaptops = () => {
  const [deletingLaptop, setDeletingLaptop] = useState(null);
  const closeModal = () => {
    setDeletingLaptop(null);
  };
  const { data: laptops = [], refetch } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/laptops");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteUser = (laptop) => {
    fetch(`http://localhost:5000/laptops/${laptop._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${laptop.model} deleted successfully.`);
        }
      });
  };
  return (
    <div className="text-xs md:text-base">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="p-1 md:p-4">Index</th>
            <th className="p-1 md:p-4">Brand</th>
            <th className="p-1 md:p-4">Model</th>
            <th className="p-1 md:p-4">Email</th>
            <th className="p-1 md:p-4">Status</th>
            <th className="p-1 md:p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {laptops.map((laptop, i) => (
            <tr className="hover" key={laptop._id}>
              <th className="p-0 md:p-4">{i + 1}</th>

              <td className="p-0 md:p-4">{laptop.brand}</td>
              <td className="p-0 md:p-4">{laptop.model}</td>
              <td className="p-0 md:p-4">{laptop.email}</td>
              <td className="p-0 md:p-4">{laptop?.status}</td>
              <td className="p-0 md:p-4">
                <label
                  onClick={() => setDeletingLaptop(laptop)}
                  htmlFor="confirmation-modal"
                  className="btn btn-xs md:btn-sm btn-error text-white"
                >
                  Delete
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletingLaptop && (
        <ConfirmationModal
          title={"Are you sure you want to delete?"}
          message={`If you delete ${deletingLaptop.name}. It can't undone anymore.`}
          successAction={handleDeleteUser}
          successButtonName="Delete"
          modalData={deletingLaptop}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllLaptops;
