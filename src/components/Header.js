import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src="../pic/images.png/100" 
        alt="XYZ Organisation Logo"
        className="header-logo"
      />
      <h1 className="header-title">XYZ Organisation</h1>
      <p className="header-tagline">Empowering Secure Access Management</p>
    </header>
  );
};

export default Header;
