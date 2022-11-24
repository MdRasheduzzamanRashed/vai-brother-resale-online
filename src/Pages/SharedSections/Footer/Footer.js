import React from 'react';
import logo from '../../../assets/logo/Vai Brother-01.png'
const Footer = () => {
    return (
      <footer className="footer footer-center p-10">
        <div>
          <img className='h-9' src={logo} alt="" />
          <p className="font-bold">
            Vai Brother Resale Online <br />
            Delivering service since 2022
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            
          </div>
        </div>
      </footer>
    );
};

export default Footer;