import React from "react";
import "./login.scss";
import logo from "../../assets/images/initiative-logo.svg";
const LogoSection = () => {
  return (
    <div className="logo-section flex justify-center items-center">
      <div className="w-2/5 login-logo">
        <img src={logo} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default LogoSection;
