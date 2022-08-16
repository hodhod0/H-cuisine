import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import img from "../../assets/images/log2o.png";
import "./NavBar.css";
import Model from "../model/Model";

const NavBar = () => {
  const nav = useNavigate();

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };
  return (
    <div className="d-flex container-navbar">
      <div>
        <img src={img} alt="logo" style={{ width: 100, height: 100 }} />
      </div>
      <div className="d-flex list-nav">
        {/* <h4 className="navbar-list-title">
          <a href="/home">Home</a>
        </h4> */}
        <Link className="navbar-list-title" to="/home">
          Home
        </Link>
        <Link className="navbar-list-title" to="/category">
          Categories
        </Link>
        <Link className="navbar-list-title" to="/aboutus">
          About us
        </Link>

        <button className="navbar-btn" onClick={() => logout()}>
          logout
        </button>
        <div>
          <Model />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
