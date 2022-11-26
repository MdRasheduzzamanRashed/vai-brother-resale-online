import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllUsers = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Index</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr className="hover" key={user._id}>
              <th>{i + 1}</th>
              <td>
                <img src={user?.image} className=' w-20 rounded-full' alt="" />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user?.status}</td>
              <td>
                <Link>
                  <button className="btn btn-active btn-sm">make admin</button>
                  <button className="btn btn-active btn-sm ml-2">delete</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
