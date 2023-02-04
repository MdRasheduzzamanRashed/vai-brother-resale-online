import React from "react";
import logo from "../../../assets/logo/Vai Brother-01.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer footer-center py-3">
      <div className="border-t-2 w-full"></div>
      <div>
        <img className="h-9" src={logo} alt="logo" />
        <p className="font-bold">
          Vai Brother Resale Online <br />
          Delivering service since 2022
        </p>
        <p>Copyright © 2022 - All right reserved</p>
        <p>
          Develop by
          <Link to="https://md-rasheduzzaman.web.app/" className="font-medium"> Md. Rasheduzzaman</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
