import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/images/log2o.png";
import "./NavBar.css";
import Model from "../model/Model";

const NavBar = () => {
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

        <button className="navbar-btn">logout</button>
        <div>
          
              <Model />

        </div>
      </div>
    </div>
  );
};

export default NavBar;
