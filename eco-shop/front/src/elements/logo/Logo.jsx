import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="link" to="/">
        <img className="img" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;
