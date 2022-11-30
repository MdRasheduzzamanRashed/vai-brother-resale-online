import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "./../../SharedSections/ConfirmationModal/ConfirmationModal";
import useTitle from "./../../../hooks/useTitle";

const AllUsers = () => {
  const [deletingUser, setDeletingUser] = useState(null);
  const closeModal = () => {
    setDeletingUser(null);
  };
  useTitle("All Users");
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/users/admin/${id}`,
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
          toast.success("Successfully create admin");
          refetch();
        }
      });
  };
  const handleDeleteUser = (user) => {
    fetch(
      `https://b612-used-products-resale-server-side-md-rasheduzzaman-rashed.vercel.app/users/${user._id}`,
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
          toast.success(`${user.name} deleted successfully.`);
        }
      });
  };
  return (
    <div className="text-xs md:text-base">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="p-1 md:p-4">Index</th>
            <th className="p-1 md:p-4">Photo</th>
            <th className="p-1 md:p-4">Name</th>
            <th className="p-1 md:p-4">Email</th>
            <th className="p-1 md:p-4">Status</th>
            <th className="p-1 md:p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr className="hover" key={user._id}>
              <th className="p-0 md:p-4">{i + 1}</th>
              <td className=" text-center p-0 md:p-4">
                <img
                  src={user?.image}
                  className=" w-10 md:w-20 rounded-full"
                  alt=""
                />
              </td>
              <td className="p-0 md:p-4">{user.name}</td>
              <td className="p-0 md:p-4">{user.email}</td>
              <td className="p-0 md:p-4">{user?.status}</td>
              <td className="p-0 md:p-4">
                {user?.status !== "Admin" && (
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-active mr-2 btn-xs md:btn-sm"
                  >
                    make admin
                  </button>
                )}
                <label
                  onClick={() => setDeletingUser(user)}
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
      {deletingUser && (
        <ConfirmationModal
          title={"Are you sure you want to delete?"}
          message={`If you delete ${deletingUser.name}. It can't undone anymore.`}
          successAction={handleDeleteUser}
          successButtonName="Delete"
          modalData={deletingUser}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllUsers;
