import React, { useContext } from "react";
import logo from "../../../assets/logo/Vai Brother-01.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../../context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => console.error(e));
  };
  const menuLists = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Category</Link>
        <ul className="p-2 bg-primary z-10">
          <li>
            <Link to="/categories/gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/categories/laptop">Laptop</Link>
          </li>
          <li>
            <Link to="/categories/desktop">Desktop</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/brands">Brands</Link>
      </li>

      <li>
        <Link to="/all-collections">All Collections</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div className="navbar justify-between">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLists}
          </ul>
        </div>
        <Link to="/">
          <img src={logo} className=" h-9" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuLists}</ul>
      </div>
      <div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt=""
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://placeimg.com/80/80/people"
                }
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {user?.uid ? (
              <>
                <li className="text-center">{user.displayName}</li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
