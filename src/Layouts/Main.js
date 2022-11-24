import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedSections/Header/Navbar";
import Footer from "./../Pages/SharedSections/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
