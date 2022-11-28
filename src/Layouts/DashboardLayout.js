import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "./../hooks/useAdmin";
import { AuthContext } from "./../context/AuthProvider";
import Navbar from "../Pages/SharedSections/Header/Navbar";
import useMember from "./../hooks/useMember";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isMember] = useMember(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu w-44 bg-slate-200 bg-opacity-30 p-4 font-medium">
            {isMember ? (
              <>
                <li>
                  <Link to="/dashboard">Add A Laptop</Link>
                </li>
                <li>
                  <Link to="/dashboard/post-blog">Post A Blog</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-laptops">My Laptops</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard">Add A Laptop</Link>
                </li>
                <li>
                  <Link to="/dashboard/post-blog">Post A Blog</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-laptops">All Laptops</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-a-brand">Add A Brand</Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
